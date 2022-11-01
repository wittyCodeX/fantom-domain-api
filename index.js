import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { BigNumber } from "@ethersproject/bignumber";
import axios from "axios";
import { connectDB, init, disconnectDB } from "./dbConnect.js";
import * as utils from "./utils.js";
// import fs from "fs";
// import { ethers } from "ethers";

dotenv.config();

// const RPCS = {
//   31337: {
//     block: 0,
//     url: "http://localhost:8545"
//   },
//   250: {
//     block: 0,
//     url: "https://rpc.ankr.com/fantom/"
//   },
//   5: {
//     block: 0,
//     url: "https://goerli.infura.io/v3/43a5d6ed07a140288e17955ddde82ae1"
//   },
//   4002: {
//     block: 10385563,
//     url: "https://rpc.testnet.fantom.network/"
//   }
// };

// const CHAIN_ID = process.env.CHAIN_ID || 5;
// const RPC = RPCS[CHAIN_ID];
// const RPC_URL = process.env.RPC_URL || RPC.url;
// const MAX_BLOCKS = 2048;
// const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

const PORT = process.env.PORT || 3001;

const canvasConfig = {
  width: 2500,
  height: 2500
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

//tell express that we want to use the www folder
//for our static assets
app.get("/", (req, res) => {
  // Read the database file and get all the lines in an array

  res.status(200).json({
    message: "Server is running"
  });
});
// Generate NFT and Store to NFT.Storage
app.post("/api/generateNFT", async (req, res) => {
  const new_params = req.body;
  await utils.generateNFT(
    {
      name: new_params.name,
      tokenId: BigNumber.from(new_params.tokenId).toString(),
      address: new_params.address
    },
    canvasConfig
  );
  // get the last insert id
  res.status(200).json({
    message: "succeed",
    name: new_params.name
  });
});

//for our static assets
app.get("/api/getRecentNFTs", (req, res) => {
  // Read the database file and get all the lines in an array

  let sql = `SELECT *
  FROM metadata
           WHERE 1 ORDER BY registered_at DESC limit 5`;
  const db = connectDB();

  // first row only
  db.all(sql, (err, rows) => {
    if (err) {
      console.log(`cannot get metadata`);
    }
    console.log(rows);
    if (rows) {
      res
        .status(200)
        .json({ message: "GET NFT LIST", status: true, nfts: rows });
    } else {
      res
        .status(200)
        .json({ message: "NON EXIST TOKEN", status: false, nfts: {} });
    }
  });
  disconnectDB(db);
});

//for our static assets
app.get("/api/getDomainsByOwner/:account", (req, res) => {
  // Read the database file and get all the lines in an array
  const account = req.params.account;
  let sql = `SELECT *
  FROM metadata
           WHERE address  = ?`;
  const db = connectDB();

  // first row only
  db.all(sql, [account], (err, rows) => {
    if (err) {
      console.log(`cannot get metadata for account: ${account}`);
    }
    if (rows) {
      res.send(rows);
    } else {
      res.send({});
    }
  });
  disconnectDB(db);
});
//tell express that we want to use the www folder
//for our static assets
app.get("/api/token/:tokenId", (req, res) => {
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
        console.log(response.data);
        const data = {
          name: response.data.name,
          description: response.data.description,
          image: utils.getIPFSGatewayURL(response.data.image),
          external_url: process.env.EXTERNAL_URL || ""
        };
        res.send(data);
      });
    } else {
      res.status(404).json({ message: "NON EXIST TOKEN" });
    }
  });
  disconnectDB(db);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

// Recovery option

// const regenerateNFT = async () => {
//   const content = fs.readFileSync("./tokensids.txt").toString("UTF8");
//   const tokenIDs = utils.getLines(content);

//   const _FTMVY = await import("./clients/index.js");
//   const FTMVY = _FTMVY.default;
//   const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

//   const fns = new FTMVY(provider, {
//     chainId: CHAIN_ID
//   });
//   let nameSignal;
//   let domain;

//   for (let i = 0; i < tokenIDs.length; i++) {
//     if (tokenIDs[i]) {
//       nameSignal = await fns.contracts.RainbowTable.lookup(
//         BigNumber.from(tokenIDs[i].trim())
//       );
//       domain = await fns.utils.decodeNameHashInputSignals(nameSignal);
//       console.log("token ID", tokenIDs[i].trim(), " at", i);
//       console.log("domain", domain);
//       await utils.generateNFT(
//         {
//           name: domain,
//           tokenId: tokenIDs[i].trim(),
//           address: "0xe6e2c266543ee7a01de3a61e8517b1a164a041ef"
//         },
//         canvasConfig
//       );
//     }
//   }
// };

// regenerateNFT();
