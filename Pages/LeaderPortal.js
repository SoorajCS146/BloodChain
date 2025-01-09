import { fetchData } from "../Backend/FetchData.js";
import { insertIntoTable } from "../Backend/InsertIntoTable.js";
class LeaderPortalPg extends HTMLElement
{
    constructor()
    {
        super();
        this.volunteerData=[];
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
            <button class="add-volunteer-button">Add Volunteer</button>
            <h2>Search Results</h2>
            <p> Leader Name : </p><br>
            <p> Other reltd Info : </p><br>
        </div>
        <div class="result-leaderTeamContainer"> </div>
        <div class="modal" id="addVolunteerModal" style="display: none;">
            <div class="modal-content">
                <span class="close" id="closeModal">&times;</span>
                <h2>Add Volunteer</h2>
                <form id="addVolunteerForm">
                    <label for="usn">USN:</label>
                    <input autocomplete="off" type="text" id="usn" name="usn" value="DonorUSN" required><br><br>
                    <label for="teamLeaderUSN">Team Leader USN:</label>
                    <input autocomplete="off" type="text" id="teamLeaderUSN" name="teamLeaderUSN" value="LeaderUSN" required><br><br>
                    <label for="sex">Sex:</label>
                    <input autocomplete="off" type="text" id="sex" name="sex" value="M" required><br><br>
                    <label for="bloodType">Blood Type:</label>
                    <input autocomplete="off" type="text" id="bloodType" name="bloodType" value="O+" required><br><br>
                    <label for="dob">Date of Birth:</label>
                    <input autocomplete="off" type="date" id="dob" name="dob" value="2025-01-08" required><br><br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        `;
        const addVolunteerButton = this.querySelector(".add-volunteer-button");
        const modal = this.querySelector("#addVolunteerModal");
        const closeModal = this.querySelector("#closeModal");        
        const form = this.querySelector("#addVolunteerForm");
        addVolunteerButton.addEventListener("click", () => {
            modal.style.display = "block";
        });
        // Close Modal
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
        // Close Modal When Clicking Outside
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Handle Form Submission
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get form values
            const formData = {
                USN: form.usn.value,
                TeamLeaderUSN: form.teamLeaderUSN.value,
                Sex: form.sex.value,
                BloodGroup: form.bloodType.value,
                DOB: form.dob.value,
            };
            this.volunteerData.push(formData);
            insertIntoTable("Donors",this.volunteerData, this.headerArray);
            this.volunteerData = [];
            // Display success message
            alert("Volunteer data stored in array successfully!");

            // Close modal and reset form
            modal.style.display = "none";
            form.reset();
        });

        const searchLeaderTeamButton = this.querySelector(".search-leaderTeam-button");
        const leaderTeamContainer = this.querySelector(".result-leaderTeamContainer");
        this.headerArray = ["USN", "TeamLeaderUSN", "Sex", "BloodGroup", "DOB"];
        searchLeaderTeamButton.addEventListener("click", async () =>
        {   
            
            const searchLeader= document.querySelector(".form-group");
        
            const tempArr = await  fetchData("Donors","*",`where USN = '${searchLeader.value}'`);

            
            console.log("tempArr:"+tempArr);
            console.log(tempArr);
            const resultArr=tempArr.rows;
            console.log(typeof(resultArr));
            console.log(resultArr);
            if(leaderTeamContainer.querySelector("table-component")==null)
            {
                
                const resultLeaderTable = document.createElement("table-component");
                resultLeaderTable.initialize(this.headerArray, resultArr);
                leaderTeamContainer.appendChild(resultLeaderTable);
            }
        });
    }   
}

customElements.define("leader-portal-pg", LeaderPortalPg);
export default LeaderPortalPg;
