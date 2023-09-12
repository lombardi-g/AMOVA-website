class NewsCards extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

        build() {
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class","card");

            const textContainer = document.createElement("div");
            textContainer.setAttribute("class","short-box-text");

            const shortTitle = document.createElement("p");
            shortTitle.textContent = this.getAttribute("manchete") || "Sem título";
            
            const readMore = document.createElement("span");
            readMore.textContent = `Ler mais...`

            textContainer.appendChild(shortTitle);
            textContainer.appendChild(readMore);

            const shortImg = document.createElement("img");
            shortImg.src = this.getAttribute("photo") || "/img/noticia-default.png";
            shortImg.alt = "Imagem";
                                    
            const longText = document.createElement("p");
            longText.setAttribute("class","longText");
            longText.textContent = this.getAttribute("texto") || "Texto não inserido";

            componentRoot.appendChild(textContainer);
            componentRoot.appendChild(shortImg);
            componentRoot.appendChild(longText);

            return componentRoot;
        }

        styles() {
            const style = document.createElement("style");
            style.textContent = `{
                .card{
                    width: 100%;
                    background: green ;
                    display: flex;
                    flex-direction: column;
                    justify content: right;
                    margin: 10px;

                }

                .card img{
                    margin: 1px;
                    padding: 1px;
                    max-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    height: 50px;
                }

                .short-box-text{

                }

                .short-box-text > p{

                }

                .short-box-text > span{

                }

                .longText{
                    
                }





            }`;
        
            return style;
        }
}
customElements.define("card-news", NewsCards);