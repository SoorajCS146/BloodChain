
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
            <button  class ="search-leaderTeam-button">Search</button>
            <h2>Search Results</h2>
            <p> Leader Name : </p><br>
            <p> Other reltd Info : </p><br>
        </div>
        <div class="result-leaderTeamContainer"> 

        </div>
        `;
        const tempArray2 = [
            ["1MS22CS146","Sooraj","O","1234"],
            ["1MS22Cs130","Suvan","A","1456"]
        ];
        console.log(this);
      
        const searchLeaderTeamButton = this.querySelector(".search-leaderTeam-button");
        const leaderTeamContainer = this.querySelector(".result-leaderTeamContainer");
        this.appendChild(leaderTeamContainer);
        searchLeaderTeamButton.addEventListener("click",() =>
        {   
            console.log("Button clicked for leader team");
            const headerArray2 = ["USN","Name","Blood Group","Contact Phone"];
            const resultLeaderTable = document.createElement("table-component");
            resultLeaderTable.initialize(headerArray2,tempArray2);
            leaderTeamContainer.appendChild(resultLeaderTable);
        });
    }   
}

customElements.define("leader-portal-pg", LeaderPortalPg);
export default LeaderPortalPg;

{/* <div class="content-container" id="results">


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
</div> */}