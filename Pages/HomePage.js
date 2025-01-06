import SearchBloodPg from "../Pages/SearchBlood.js";
import LeaderPortalPg from "../Pages/LeaderPortal.js";
import DonationLogsPg from "./DonationLogs.js";

class HomePg extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../Styles/home_page.css";
        document.body.appendChild(link);

        this.innerHTML = `
            <div class="container">
                <div class="section" id="search-blood-button">
                    <span>Search for Blood</span>
                </div>
                <div class="section" id="leader-portal-button">
                    <span>Leader Groups</span>
                </div>
                <div class="section" id="donation-logs-button"> 
                    <span>Donation Logs</span>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 Blood Donation Management System</p>
            </footer>
        `;

        const searchBloodButton = document.querySelector("#search-blood-button");
        const leaderPortalButton = document.querySelector("#leader-portal-button");
        const donationLogsButton = document.querySelector("#donation-logs-button");

        searchBloodButton.addEventListener("click", ()=>
        {
            window.openPage("search-blood-pg");
            // alert("Functionality under development ... ");
        });

        leaderPortalButton.addEventListener("click", ()=>
        {
            window.openPage("leader-portal-pg");
            // alert("Functionality under development ... ");
        });

        donationLogsButton.addEventListener("click", ()=>
        {
            window.openPage("donation-logs-pg");
            // alert("Functionality under development ... ");
        });

    }
}

customElements.define("home-page", HomePg);
export default HomePg;