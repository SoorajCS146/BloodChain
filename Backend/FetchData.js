import DatabaseConnector from "./Connection.js";

export async function fetchData(tableName,attributeList,condition=null) {
    DatabaseConnector.connect();

    let selectQuery= `Select ${attributeList} from ${tableName} `;
    if(condition!=null)
    {
        selectQuery+=condition;
    }
    console.log(selectQuery);
    return await DatabaseConnector.executeQuery(selectQuery);

    DatabaseConnector.disconnect();
}