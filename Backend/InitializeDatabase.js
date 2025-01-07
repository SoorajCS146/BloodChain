import DatabaseConnector from "./Connection.js";

export async function initializeDatabase() {
    DatabaseConnector.connect();
    console.log("CONNED!");

    const createTeamLeader='Create table IF NOT EXISTS TeamLeader (USN varchar(20) PRIMARY KEY,Name varchar(20),Department varchar(20))';
    await DatabaseConnector.executeQuery(createTeamLeader);
    console.log("TeamLeader Table created Successfully");
    
    const createDonors = 'Create table IF NOT EXISTS  Donors (USN varchar(20) PRIMARY KEY, TeamLeaderUSN varchar(20),Sex varchar(5),BloodType varchar(2),DOB date,Foreign Key(TeamLeaderUSN) references TeamLeader(USN))';
    await DatabaseConnector.executeQuery(createDonors);

    const createDonations= 'Create table IF NOT EXISTS Donations  (DonorUSN varchar(20),TeamLeaderUSN varchar(20),PRIMARY KEY(DonorUSN,TeamLeaderUSN),Foreign Key (DonorUSN) references Donors(USN), Foreign Key(TeamLeaderUSN) references TeamLeader(USN))';
    await DatabaseConnector.executeQuery(createDonations);
    
    DatabaseConnector.disconnect();

}
initializeDatabase();