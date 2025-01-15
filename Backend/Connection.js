const mysql = require("mysql2/promise");

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database!');
});


class DatabaseConnector 
{
    static connection = null;
    static connectionDetails = 
    {
        // Optional .. probably not requried.
        // host: process.env.DB_HOST || 'db',
        // user: process.env.DB_USER || 'root',
        // password: process.env.DB_PASSWORD || '',
        // database: process.env.DB_NAME || 'bdms',

        host: 'localhost',
        port: 3307,
        user: 'root',
        password: '',
        database: 'bdms'
    };

    static async connect()
    {
        if(!DatabaseConnector.connection)
        {
            DatabaseConnector.connection = await mysql.createConnection(DatabaseConnector.connectionDetails);
        }
    }

    static async disconnect()
    {
        if(!DatabaseConnector.connection)
        {
            return;
        }
        
        await DatabaseConnector.connection.end();
        DatabaseConnector.connection = null;
    }

    static async executeQuery(query)
    {
        if(!DatabaseConnector.connection)
        {
            await DatabaseConnector.connect();
        }

        const [rows, fields] = await DatabaseConnector.connection.execute(query);

        await DatabaseConnector.disconnect();
        
        return { rows: rows, fields: fields };
    }
}

export default DatabaseConnector;