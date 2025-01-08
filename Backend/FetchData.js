import DatabaseConnector from "./Connection.js";

export async function fetchData(tableName,attributeList) {
    DatabaseConnector.connect();

    const selectQuery= `Select ${attributeList} from ${tableName}`
       
}