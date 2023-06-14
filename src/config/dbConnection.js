const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
       host: "44.198.77.190",
       user: "admin",
       password: "admindbs",
       database: "Teo_Info"
    });
}