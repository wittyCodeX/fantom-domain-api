const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { BigNumber } = require("@ethersproject/bignumber");
const axios = require("axios");
const { connectDB, init, disconnectDB } = require("./dbConnect");
const utils = require("./utils.js");
dotenv.config();

const PORT = process.env.PORT || 3001;

const canvasConfig = {
  width: 5000,
  height: 5000
};

init();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.post("/generateNFT", async (req, res) => {
  const new_params = req.body;
  await utils.generateNFT(
    {
      name: new_params.name,
      tokenId: BigNumber.from(new_params.tokenId).toString()
    },
    canvasConfig
  );
  // get the last insert id
  res.status(200).json({
    message: "succeed",
    dbIndex: this.lastID
  });
});
//tell express that we want to use the www folder
//for our static assets
app.get("/", (req, res) => {
  // Read the database file and get all the lines in an array

  res.status(200).json({
    message: "Server is running"
  });
});

//tell express that we want to use the www folder
//for our static assets
app.get("/api/metadata/:tokenId", (req, res) => {
  // Read the database file and get all the lines in an array
  const tokenId = req.params.tokenId;
  console.log(`fetching metadata for token id: ${tokenId}`);
  let sql = `SELECT *
  FROM metadata
           WHERE tokenId  = ?`;
  const db = connectDB();

  // first row only
  db.get(sql, [tokenId], (err, row) => {
    if (err) {
      console.log(`cannot get metadata for tokenID: ${tokenId}`);
    }
    if (row) {
      axios.get(row.url).then(response => {
        res.status(200).json(response.data);
      });
    } else {
      res.status(404).json({ message: "NON EXIST TOKEN" });
    }
  });
  disconnectDB(db);
});
app.use(express.static(path.join(__dirname, "/")));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
