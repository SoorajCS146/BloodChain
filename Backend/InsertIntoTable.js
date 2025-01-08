import DatabaseConnector from "./Connection.js";

export async function insertIntoTable(tableName,volunteerData,headerArray) {
    DatabaseConnector.connect();
    console.log("Recived Volunteer Data:");
    console.log(volunteerData);

    //volunteerData is an object refering TeamLeader table row
    // headerArray = ["USN", "TeamLeaderUSN", "Sex", "BloodType", "DOB"];

    let insertQuery = `Insert into ${tableName} values (`;
    for(let i=0; i<headerArray.length; i++)
    {
        insertQuery += `\'${volunteerData[0][headerArray[i]]}\'`;
        if(i<headerArray.length-1)
        {
            insertQuery+= ", ";
        }

    }
    insertQuery+=");";
    console.log("Query:"+insertQuery);
    await DatabaseConnector.executeQuery(insertQuery);
    console.log("Query Succesfully inserted");

    DatabaseConnector.disconnect();
}
