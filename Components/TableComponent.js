class TableComponent extends HTMLElement
{
    constructor()
    {
        super();
    }
    initialize(headerColumns)
    {   
        this.headerColumns = headerColumns;
    }
    connectedCallback()
    {
        this.innerHTML=`
            <table>
                <thead> 
                    <tr id="header-row"> </tr>
                </thead>
            </table>
        `;

        const headerRow = document.querySelector("#header-row");
        for(const columnName of this.headerColumns)
        {   
            const headerField = document.createElement("th");
            headerField.innerText = columnName;
            headerRow.appendChild(headerField);
        }
    }
}
customElements.define("table-component", TableComponent);
export default TableComponent;