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
            readMore.textContent = `Ler mais...`;
            readMore.addEventListener("click",()=>this.toggleLongText());

            const shortImg = document.createElement("img");
            shortImg.src = this.getAttribute("photo") || "/img/noticia-default.png";
            shortImg.alt = "Imagem";
                                    
            const longText = document.createElement("p");
            longText.setAttribute("class","longText");
            longText.textContent = this.getAttribute("texto") || "Texto não inserido";

            componentRoot.appendChild(shortImg);
            textContainer.appendChild(shortTitle);
            textContainer.appendChild(readMore);
            textContainer.appendChild(longText);
            componentRoot.appendChild(textContainer);

            return componentRoot;
        }

        toggleLongText(){
            const longText = this.shadowRoot.querySelector("p.longText");
            const card = this.shadowRoot.querySelector("div.card");
            const shortImg = this.shadowRoot.querySelector(".card img");
            longText.style.display = (longText.style.display === "none" || longText.style.display === "") ? "block" : "none";
            card.style.flexDirection = (card.style.flexDirection === "row" || card.style.flexDirection === "") ? "column" : "row";
            shortImg.style.maxWidth = (shortImg.style.maxWidth === "90px" || shortImg.style.maxWidth === "") ? "500px" :"90px";
            }

        styles() {
            const style = document.createElement("style");
            style.textContent = `
                .card{
                    background: #6c9902 ;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    margin: 10px;
                    padding: 5px;
                    box-sizing: border-box;
                    border-radius: 0.25rem;
                    width: 100%;
                }

                .card img{
                    margin: 1px;
                    padding: 1px;
                    max-width: 12rem;
                    max-height: auto;
                    object-fit: cover;
                    
                }

                .short-box-text{
                    margin: 0.8rem;

                }

                .short-box-text > p{
                    padding: .5rem .5rem;
                    margin: .25rem;
                }

                .short-box-text > span{
                    cursor: pointer;
                    color: black;
                    padding: .25rem .5rem;
                    margin: .25rem;
                    border-radius: 1rem;
                    background-color: green;
                    filter: brightness(1.15);

                }

                .short-box-text > span:hover{
                    
                    opacity: 0.6;
                }

                .longText {
                    display: none;
                    border: 50 rem;
                    font-size: 5 rem;
                }

                @media screen and (max-width: 530px) {
                    .card img{
                        margin: 1px;
                        padding: 1px;
                        max-width: 90px;
                        max-height: auto;
                        object-fit: cover;
                        
                    } 
                }

            `;
        
            return style;
        }
}
customElements.define("card-news", NewsCards);