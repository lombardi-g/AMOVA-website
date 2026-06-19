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
})();
