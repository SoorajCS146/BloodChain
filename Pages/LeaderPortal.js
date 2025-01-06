
class LeaderPortalPg extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../Styles/leader_portal.css";
        document.body.appendChild(link);

        this.innerHTML = `
         <h1>Leader Portal</h1>
        <div class="search-containter">
            <input type="text" class="form-group" name="leader_name" placeholder="Enter Leader Name">
            <button type="submit" onclick="alert('Functionality under development...!');">Search</button>
        </div>

        <div class="results">
            <p>Need to define the table structure for the results!</p>
        </div>
        `;
    }
}

customElements.define("leader-portal-pg", LeaderPortalPg);
export default LeaderPortalPg;