
class DonationLogsPg extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../Styles/donation_logs.css";
        document.body.appendChild(link);

        this.innerHTML = `
            <div id=main-content>
                <h1>Donation Logs</h1>
                
                <div id="results">
                    <h2>Current Logs</h2>
                    <table id="resultsTable">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Donor</th>
                                <th>BloodType</th>
                                <th>OtherField1</th>
                                <th>OtherField2</th>
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

customElements.define("donation-logs-pg", DonationLogsPg);
export default DonationLogsPg;