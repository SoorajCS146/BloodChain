
class HeaderComponent extends HTMLElement
{
    constructor()
    {
        super();
    }

    showBackButton()
    {
        this.backButton.style.display = "inline-block";
    }
    hideBackButton()
    {
        this.backButton.style.display = "none";
    }

    connectedCallback()
    {
        this.innerHTML = `
                <header>
                    <h1>Blood Donation Management System</h1>
                </header>
        `;

        this.backButton = document.createElement("button");

        this.backButton.id = "backButton";
        this.backButton.innerText = "Back";
        this.backButton.style.backgroundColor = "red";
        
        this.backButton.style.left = this.backButton.style.top = "5%";
        this.backButton.style.width = "100px"
        this.backButton.style.height = "30px"
        this.backButton.style.position = "fixed";

        const style = document.createElement("style");
        style.textContent = `
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #121212;
                color: #ffffff;
                display: flex;
                flex-direction: column;
                min-height: 100vh; /* Ensure full screen height */
            }

            header {
                padding: 20px;
                background-color: #ff0000;
                color: white;
                font-size: 1rem;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                text-align: center;
            }

            #backButton {
                border: solid 2px black;
                text-algo
            }


        `

        // Event Handling.
        this.backButton.onclick = () => {
            window.goBack();
        };
        document.body.appendChild(this.backButton);
        document.body.appendChild(style);
    }
}

customElements.define("header-component", HeaderComponent);
export default HeaderComponent;