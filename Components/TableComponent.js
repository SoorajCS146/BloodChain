class TableComponent extends HTMLElement
{
    constructor()
    {
        super();
    }
    initialize(headerColumns, resultRecords)
    {   
        this.headerColumns = headerColumns;     // Array of Strings.
        this.resultRecords = resultRecords;     // Array of Objects.
    }
    connectedCallback()
    {
        this.innerHTML=`
            <table>
                <thead> 
                    <tr class="header-row"> </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        `;
        console.log("Created table component");

        const headerRow = this.querySelector(".header-row");

        for(const columnName of this.headerColumns)
        {   
            const headerField = document.createElement("th");
            headerField.innerText = columnName;
            headerRow.appendChild(headerField);
        }

        const tableBody = this.querySelector("tbody");
        
        // Outer loop will iterate over each Object of the resultRecords Array.
        for(const record of this.resultRecords)
        {

            const currentRow = document.createElement("tr");
            // Inner loop will iterate over the "keys" of the Object,
            for(const field in record)
            {
                const currentField = document.createElement("td");
                currentField.innerText = record[field];
                currentRow.appendChild(currentField);
            }
            tableBody.appendChild(currentRow);
        }
    }
}
customElements.define("table-component", TableComponent);
export default TableComponent;