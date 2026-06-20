// Lê os dados da notícia pela URL e preenche a página /noticia.html.
(() => {
    const params = new URLSearchParams(location.search);

    const manchete = params.get("manchete") || "Notícia";
    const descricao = params.get("descricao") || "";
    const texto = params.get("texto") || "";
    const data = params.get("data") || "";
    const photo = params.get("photo") || "/img/noticia-default.png";

    document.title = "AMOVA — " + manchete;

    const set = (id, value) => {
        const el = document.getElementById(id);
        if (value) {
            el.textContent = value;
        } else {
            el.style.display = "none";
        }
    };

    set("noticia-manchete", manchete);
    set("noticia-data", data);
    set("noticia-descricao", descricao);
    set("noticia-texto", texto);

    const foto = document.getElementById("noticia-foto");
    foto.src = photo;
    foto.alt = manchete;

    // Galeria opcional (photo2..photo10), separadas por "|".
    const galeria = (params.get("galeria") || "")
        .split("|")
        .map(s => s.trim())
        .filter(Boolean);

    const galeriaEl = document.getElementById("noticia-galeria");
    const galeriaTitulo = document.getElementById("noticia-galeria-titulo");

    if (galeria.length) {
        galeria.forEach((url, i) => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = manchete + " — foto " + (i + 2);
            img.loading = "lazy";
            galeriaEl.appendChild(img);
        });
    } else {
        galeriaTitulo.style.display = "none";
        galeriaEl.style.display = "none";
    }
})();
