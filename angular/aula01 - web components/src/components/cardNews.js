class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")


        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");


        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link_url");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src= this.getAttribute("photo") || "assets/default-profile-picture.jpg";
        newsImage.alt="Foto news";
        newsImage.width="300";
        cardRight.appendChild(newsImage);



        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `

            .card {
                width:  620px;
                background-color: #FFFFFF;
                -webkit-box-shadow: 9px 9px 27px 0px rgb(255 0 0);
                -moz-box-shadow: 9px 9px 27px 0px rgb(255 0 0);
                box-shadow: 9px 9px 27px 0px rgb(255 0 0);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 30px auto 30px auto;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card_left > span {
                font-weight: 400;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
                font-weight: bold;
            }
            
            .card_left > p {
                color: rgb(70, 70, 70);
            }

            `;
        
            return style;
        }
}

customElements.define("card-news", Cardnews);