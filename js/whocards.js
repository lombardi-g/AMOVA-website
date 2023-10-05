class Whocards extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

        build() {
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card");
        
            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card__left");
            
            const cardName = document.createElement("span");
            cardName.textContent = this.getAttribute("nome");

            const cardTitle = document.createElement("span");
            cardTitle.textContent = this.getAttribute("cargo") || "";
        
            cardLeft.appendChild(cardName);
            cardLeft.appendChild(cardTitle);
                    
            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");
        
            const cardImage = document.createElement("img");
            cardImage.src = this.getAttribute("photo") || "/img/pessoas/foto-default.jpg";
            cardImage.alt = "Foto da Pessoa";
            cardRight.appendChild(cardImage);
            
            const prefixes = document.createElement("div");
            prefixes.setAttribute("class","prefixes");
            prefixes.innerHTML = "Nome:<br><br>Cargo:";
            
            componentRoot.appendChild(prefixes)
            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);
            
            return componentRoot;
          }

          styles() {
            const style = document.createElement("style");
            style.textContent = `
                .card {
                  width: 100%;
                  box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                  -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                  -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin:18px;
                  background-color: #e8edff;
                }
                
                .prefixes {
                    margin: 0.25rem;
                    font-size: 13px;
                }

                .card__left {
                  display: flex;
                  flex-direction: column;
                  justify-content: left;
                  padding-left: 1px;
                }
                                
                .card__left > span {
                  font-family: 'Action Man', sans-serif;
                  margin-top: 15px;
                  font-size: 18px;
                  color: black;
                  text-decoration: none;
                  font-weight: bold;
                }

                .card__right{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    padding:5px;
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                }

                .card__right img{
                    margin:0;
                    padding:0;
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    // filter: drop-shadow(-20px 10px 7px #000);
                    
                }
                }
            `;
        
            return style;
    }
}
customElements.define("card-who", Whocards);