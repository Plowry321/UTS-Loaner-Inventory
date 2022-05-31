const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Batman052400!!!!",
  database: "loanerInventory",
});

app.get("/computers", (req, res) => {
  const selectQuery = "SELECT * FROM computers";
  db.query(selectQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3002, () => {
  console.log("Server running on port 3002...");
});
