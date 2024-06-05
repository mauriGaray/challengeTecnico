const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "sql10.freesqldatabase.com",
  user: "sql10712043",
  password: "wnuyhUgkiu",
  database: "sql10712043",
  port: 3306,
});

// Comprobación de la conexión inicial
pool.getConnection((err, connection) => {
  if (err) {
    console.error("An error has ocurred connecting DB:", err);
    if (connection) {
      connection.release();
    }
  } else {
    console.log("database connected");
    connection.release();
  }
});

module.exports = pool;
