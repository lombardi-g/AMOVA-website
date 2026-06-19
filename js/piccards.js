// ============================================================
//  Card de notícia (compacto)
//
//  Ao clicar, o card abre a página /noticia.html mostrando a
//  notícia completa (manchete, descrição, texto, data e foto).
//
//  Para criar uma notícia nova, basta copiar uma <card-news>
//  no HTML e trocar os textos:
//
//  <card-news
//      manchete="Título da notícia"
//      descricao="Resumo curto que aparece no card"
//      texto="Texto completo que aparece na página da notícia"
//      data="29/12/2023"
//      photo="img/minha-foto.jpg">
//  </card-news>
// ============================================================

class NewsCards extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const root = document.createElement("a");
        root.setAttribute("class", "card");
        root.setAttribute("href", this.noticiaUrl());

        const img = document.createElement("img");
        img.src = this.getAttribute("photo") || "/img/noticia-default.png";
        img.alt = "Imagem da notícia";

        const body = document.createElement("div");
        body.setAttribute("class", "card__body");

        const title = document.createElement("p");
        title.setAttribute("class", "card__title");
        title.textContent = this.getAttribute("manchete") || "Sem título";

        const desc = document.createElement("p");
        desc.setAttribute("class", "card__desc");
        desc.textContent = this.shortDescription();

        const footer = document.createElement("div");
        footer.setAttribute("class", "card__footer");

        const date = document.createElement("span");
        date.setAttribute("class", "card__date");
        date.textContent = this.getAttribute("data") || "";

        const more = document.createElement("span");
        more.setAttribute("class", "card__more");
        more.textContent = "Ler mais...";

        footer.appendChild(date);
        footer.appendChild(more);

        body.appendChild(title);
        body.appendChild(desc);
        body.appendChild(footer);

        root.appendChild(img);
        root.appendChild(body);

        return root;
    }

    // Monta o link para /noticia.html com os dados da notícia.
    noticiaUrl() {
        const params = new URLSearchParams({
            manchete: this.getAttribute("manchete") || "",
            descricao: this.getAttribute("descricao") || "",
            texto: this.getAttribute("texto") || "",
            data: this.getAttribute("data") || "",
            // Resolve a foto para um caminho absoluto, válido a partir
            // de qualquer página (index.html, highlights.html, etc.).
            photo: new URL(
                this.getAttribute("photo") || "/img/noticia-default.png",
                document.baseURI
            ).pathname,
        });
        return "/html/noticia.html?" + params.toString();
    }

    // Usa "descricao" se existir; senão, corta o texto completo.
    shortDescription() {
        const desc = this.getAttribute("descricao");
        if (desc) return desc;
        const full = (this.getAttribute("texto") || "").trim();
        return full.length > 140 ? full.slice(0, 140).trim() + "…" : full;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                background-color: #6c9902;
                display: flex;
                flex-direction: column;
                height: 100%;
                border-radius: 0.5rem;
                overflow: hidden;
                cursor: pointer;
                text-decoration: none;
                box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.55);
                transition: box-shadow 0.2s, transform 0.2s;
            }

            .card:hover {
                box-shadow: 5px 5px 16px 0px rgba(255, 255, 255, 0.9);
                transform: translateY(-3px);
            }

            .card img {
                width: 100%;
                height: 120px;
                object-fit: cover;
                display: block;
            }

            .card__body {
                display: flex;
                flex-direction: column;
                flex: 1;
                padding: 0.6rem 0.7rem 0.7rem;
            }

            .card__title {
                margin: 0 0 0.4rem;
                font-size: 1rem;
                font-weight: bold;
                color: #fff;
                line-height: 1.2;
            }

            .card__desc {
                margin: 0;
                font-size: 0.8rem;
                color: #f1f7df;
                line-height: 1.3;
                flex: 1;
            }

            .card__footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 0.6rem;
                gap: 0.4rem;
            }

            .card__date {
                font-size: 0.7rem;
                color: #e6efcf;
            }

            .card__more {
                font-size: 0.72rem;
                color: #fff;
                background-color: #4c6e00;
                padding: 0.2rem 0.5rem;
                border-radius: 1rem;
                white-space: nowrap;
            }

            .card:hover .card__more {
                background-color: #3a5500;
            }
        `;
        return style;
    }
}

customElements.define("card-news", NewsCards);
