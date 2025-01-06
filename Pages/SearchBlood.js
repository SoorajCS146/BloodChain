import TableComponents from '../Components/TableComponent.js';

class SearchBloodPg extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../Styles/search_blood.css";
        document.body.appendChild(link);

        this.innerHTML = `
        <div id="query-container">
            <h1>Search for Blood</h1>

            <div class="search-container">
                <div class="form-group">
                    <label for="bloodType">Blood Type:</label>
                    <input list="bloodTypes" id="bloodType" name="bloodType" placeholder="Select or type blood type">
                    <datalist id="bloodTypes">
                        <option value="O">
                        <option value="A">
                        <option value="B">
                        <option value="AB">
                    </datalist>
                </div>
        
                <div class="form-group">
                    <label for="rhType">RH Type:</label>
                    <select id="rhType" name="rhType">
                        <option value="">-- Select RH Type --</option>
                        <option value="Positive">Positive</option>
                        <option value="Negative">Negative</option>
                    </select>
                </div>
        
                <button onclick="alert('Functionality under development...!');">Search</button>
            </div>
        
            <div id="result-container">

            </div>
           
        </div>
        `;

        const resultContainer = document.querySelector("#result-container");
        const resultTable = document.createElement("table-component");

        const headerArray =  ["Volunteer Name","Contact Number","Team Leader"]
        resultTable.initialize(headerArray);
        
        resultContainer.appendChild(resultTable);
        
    }
}

customElements.define("search-blood-pg", SearchBloodPg);
export default SearchBloodPg;

// <div id="results-container">
//                 <h2>Search Results</h2>
//                 <table id="resultsTable">
//                     <thead>
//                         <tr>
//                             <th>Volunteer Name</th>
//                             <th>Contact Number</th>
//                             <th>Team Leader</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <!-- Results will be dynamically inserted here -->
//                     </tbody>
//                 </table>
//             </div>