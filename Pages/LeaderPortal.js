
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
        <div class="content-containter">
            <input type="text" class="form-group" name="leader_name" placeholder="Enter Leader Name">
            <button type="submit" onclick="alert('Functionality under development...!');">Search</button>
        </div>

        <div class="content-container" id="results">
            <h2>Search Results</h2>
            <p> Leader Name : </p><br>
            <p> Other reltd Info : </p><br>
            <table id="resultsTable">
                <thead>
                    <tr>
                        <th>USN</th>
                        <th>Name</th>
                        <th>Semester</th>
                        <th>Branch</th>
                        <th>OtherField1/th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Results will be dynamically inserted here -->
                </tbody>
            </table>
            </div>
        </div>
        `;
    }
}

customElements.define("leader-portal-pg", LeaderPortalPg);
export default LeaderPortalPg;