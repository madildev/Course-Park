const mysql = require('mysql');

const dbConnection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "course_park"
    }
);

dbConnection.connect((error) => {
        if (error) {
            throw error;
        }
        else {
            console.log("Database Connected Successfully!");
        }
    }
);

module.exports = dbConnection;