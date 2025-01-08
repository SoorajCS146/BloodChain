

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
                    <input type="text" id="usn" name="usn" required><br><br>
                    <label for="teamLeaderUSN">Team Leader USN:</label>
                    <input type="text" id="teamLeaderUSN" name="teamLeaderUSN" required><br><br>
                    <label for="sex">Sex:</label>
                    <input type="text" id="sex" name="sex" required><br><br>
                    <label for="bloodType">Blood Type:</label>
                    <input type="text" id="bloodType" name="bloodType" required><br><br>
                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required><br><br>
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
                usn: form.usn.value,
                teamLeaderUSN: form.teamLeaderUSN.value,
                sex: form.sex.value,
                bloodType: form.bloodType.value,
                dob: form.dob.value,
            };

            // Add form data to volunteerData array
            this.volunteerData.push(formData);

            // Log data for debugging
            // console.log("Volunteer Data:", this.volunteerData);
            console.log(typeof this.volunteerData);
            console.log(this.volunteerData);
            console.log("Seperator");
            console.log(this.volunteerData[0]);
            console.log(typeof this.volunteerData[0]);

            // Display success message
            alert("Volunteer data stored in array successfully!");

            // Close modal and reset form
            modal.style.display = "none";
            form.reset();
        });

        console.log(this.volunteerData);
        // const tempArray2 = [
        //     ["1MS22CS146","Sooraj","O","1234"],
        //     ["1MS22Cs130","Suvan","A","1456"]
        // ];
        const tempArr = [
            {
                USN: 123,
                TeamLeaderUSN: 456,
                Sex: "M",
                BloodGroup: "O+",
                DOB: "2024-01-08"
            }
        ];
        console.log(this);
      
        const searchLeaderTeamButton = this.querySelector(".search-leaderTeam-button");
        const leaderTeamContainer = this.querySelector(".result-leaderTeamContainer");
        this.headerArray = ["USN", "TeamLeaderUSN", "Sex", "BloodType", "DOB"];
        searchLeaderTeamButton.addEventListener("click",() =>
        {   
            console.log("Button clicked for leader team");
            if(leaderTeamContainer.querySelector("table-component")==null)
            {
                
                const resultLeaderTable = document.createElement("table-component");
                resultLeaderTable.initialize(this.headerArray, tempArr);
                leaderTeamContainer.appendChild(resultLeaderTable);
            }
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