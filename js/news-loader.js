// ============================================================
//  Carregador de notícias a partir da Planilha Google (CSV)
//
//  Lê o CSV publicado (definido em news-config.js -> NEWS_CSV_URL)
//  e cria os cards <card-news> automaticamente dentro de cada
//  elemento .news-grid da página.
//
//  - Se NEWS_CSV_URL estiver vazio ou a planilha não puder ser lida,
//    os cards fixos que já estão no HTML continuam aparecendo.
//  - Atributos opcionais em .news-grid:
//        data-news-limit="14"   -> nº máximo de notícias na página
//        data-news-more="/html/highlights.html" -> adiciona o card "Mais..."
// ============================================================

(() => {
    const csvUrl = (typeof NEWS_CSV_URL !== "undefined" && NEWS_CSV_URL || "").trim();
    if (!csvUrl) return; // modo de segurança: mantém os cards fixos do HTML

    document.addEventListener("DOMContentLoaded", async () => {
        const grids = document.querySelectorAll(".news-grid");
        if (!grids.length) return;

        let rows;
        try {
            const res = await fetch(csvUrl, { cache: "no-store" });
            if (!res.ok) throw new Error("HTTP " + res.status);
            rows = parseCsv(await res.text());
        } catch (err) {
            // Falhou: não apaga nada, mantém os cards fixos do HTML.
            console.warn("Não foi possível carregar as notícias da planilha:", err);
            return;
        }

        // O operador cadastra de cima para baixo (mais antiga primeiro),
        // mas o site mostra da mais recente para a mais antiga.
        const noticias = rows.map(toNoticia).filter(n => n.manchete).reverse();
        grids.forEach(grid => renderGrid(grid, noticias));
    });

    // Preenche uma grade com os cards das notícias.
    //   data-news-skip  -> pula as N primeiras (usado na página de destaques)
    //   data-news-limit -> mostra no máximo N notícias (usado na página inicial)
    //   data-news-more  -> adiciona o card "Mais..." no fim
    function renderGrid(grid, noticias) {
        const skip = parseInt(grid.getAttribute("data-news-skip"), 10) || 0;
        const limitAttr = parseInt(grid.getAttribute("data-news-limit"), 10);
        const moreHref = grid.getAttribute("data-news-more");

        let list = noticias.slice(skip);
        if (Number.isFinite(limitAttr)) list = list.slice(0, limitAttr);

        grid.innerHTML = ""; // só apaga depois de já ter os dados em mãos

        list.forEach(n => {
            const card = document.createElement("card-news");
            card.setAttribute("manchete", n.manchete);
            card.setAttribute("descricao", n.descricao);
            card.setAttribute("texto", n.texto);
            card.setAttribute("data", n.data);
            card.setAttribute("photo", n.photo);
            if (n.galeria.length) card.setAttribute("galeria", n.galeria.join("|"));
            grid.appendChild(card);
        });

        // O card "Mais..." só faz sentido se houver notícias além das exibidas.
        if (moreHref && noticias.length > list.length + skip) {
            grid.appendChild(buildMoreCard(moreHref));
        }
    }

    // Card "Mais..." (igual ao do HTML estático).
    function buildMoreCard(href) {
        const a = document.createElement("a");
        a.className = "news-more";
        a.href = href;
        a.innerHTML =
            '<span class="news-more__icon">+</span>' +
            '<span class="news-more__label">Mais...</span>';
        return a;
    }

    // Converte uma linha da planilha em objeto de notícia.
    function toNoticia(row) {
        const get = (key) => (row[key] || "").trim();

        // Coleta photo1..photo10 (máx. 10). "photo" funciona como photo1.
        const photos = [];
        for (let i = 1; i <= 10; i++) {
            let value = get("photo" + i);
            if (i === 1 && !value) value = get("photo");
            if (value) photos.push(driveImage(value));
        }

        return {
            manchete: get("manchete"),
            descricao: get("descricao"),
            texto: get("texto"),
            data: get("data"),
            // photo1: capa do card e imagem principal da notícia.
            photo: photos[0] || "/img/noticia-default.png",
            // photo2..photo10: galeria no rodapé da página da notícia.
            galeria: photos.slice(1),
        };
    }

    // Transforma links de compartilhamento do Google Drive em links
    // de imagem que funcionam dentro de <img>. Outros links passam direto.
    function driveImage(url) {
        if (!url) return "";
        const m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=|thumbnail\?id=)([-\w]{20,})/);
        if (m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1000`;
        return url;
    }

    // ---------- Parser de CSV ----------
    // Suporta campos entre aspas, vírgulas e quebras de linha dentro
    // das aspas, e aspas duplas escapadas (""). Primeira linha = títulos.
    function parseCsv(text) {
        const records = [];
        let field = "";
        let record = [];
        let inQuotes = false;

        text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

        for (let i = 0; i < text.length; i++) {
            const c = text[i];

            if (inQuotes) {
                if (c === '"') {
                    if (text[i + 1] === '"') { field += '"'; i++; }
                    else inQuotes = false;
                } else {
                    field += c;
                }
            } else if (c === '"') {
                inQuotes = true;
            } else if (c === ",") {
                record.push(field); field = "";
            } else if (c === "\n") {
                record.push(field); field = "";
                records.push(record); record = [];
            } else {
                field += c;
            }
        }
        // último campo / registro
        if (field.length > 0 || record.length > 0) {
            record.push(field);
            records.push(record);
        }

        if (!records.length) return [];

        const headers = records[0].map(h => h.trim().toLowerCase());
        return records.slice(1)
            .filter(r => r.some(v => v.trim() !== "")) // ignora linhas vazias
            .map(r => {
                const obj = {};
                headers.forEach((h, idx) => { obj[h] = r[idx] != null ? r[idx] : ""; });
                return obj;
            });
    }
})();
