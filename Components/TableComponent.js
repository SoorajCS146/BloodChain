class TableComponent extends HTMLElement
{
    constructor()
    {
        super();
    }
    initialize(headerColumns, resultRecords)
    {   
        this.headerColumns = headerColumns;
        this.resultRecords = resultRecords;
    }
    connectedCallback()
    {
        this.innerHTML=`
            <table>
                <thead> 
                    <tr id="header-row"> </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        `;

        const headerRow = document.querySelector("#header-row");
        for(const columnName of this.headerColumns)
        {   
            const headerField = document.createElement("th");
            headerField.innerText = columnName;
            headerRow.appendChild(headerField);
        }

        const headerBody = document.querySelector("tbody");

        for( const record of this.resultRecords)
        {
            const currentRow = document.createElement("tr");
            for( const field of record)
            {
                const currentField = document.createElement("td");
                currentField.innerText = field;
                currentRow.appendChild(currentField);
            }
            headerBody.appendChild(currentRow);
        }
    }
}
customElements.define("table-component", TableComponent);
export default TableComponent;