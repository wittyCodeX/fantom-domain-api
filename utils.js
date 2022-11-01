import fs from "fs";
import path from "path";
import { connectDB, disconnectDB } from "./dbConnect.js";
import { createCanvas, loadImage, registerFont } from "canvas";
// Import the NFTStorage class and File importructor from the 'nft.storage' package
import { NFTStorage, File } from "nft.storage";
import mime from "mime";

const NFT_STORAGE_KEY =
  process.env.NFT_STORAGE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE4NzlmN2YyOGNkRDIwNGY0M2VGNDE5OTEyRDU0MjFjRjg3RDVmRmEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Mjc3NTA1NDA5NSwibmFtZSI6ImZhbnRvbS1kb21haW4ifQ.b3DosH4PcLDQxkfmvG2qjUl3btM7_69rlcvstUBbsUw";

const client = new NFTStorage({ token: NFT_STORAGE_KEY });

const paths = {
  images: "./images",
  fonts: "./fonts",
  database: "./database.txt",
  bgImage: "./nft_bg.png"
};
const customFonts = {
  postTitle: {
    file: "kefa-regular.ttf",
    name: "Kefa"
  },
  siteName: {
    file: "menlo-regular.ttf",
    name: "Menlo"
  }
};
const fonts = {
  postTitlexl: "bold 400px Franklin Gothic Medium",
  postTitlelg: "bold 350px Franklin Gothic Medium",
  postTitlemd: "bold 300px Franklin Gothic Medium",
  postTitlesm: "bold 250px Franklin Gothic Medium",
  site: "bold 150pt Franklin Gothic Medium"
};
// Register custom fonts
Object.keys(customFonts).forEach(font => {
  registerFont(`${paths.fonts}/${customFonts[font].file}`, {
    family: customFonts[font].name
  });
});

// /**
//  * A helper to read a file from a location on disk and return a File object.
//  * Note that this reads the entire file into memory and should not be used for
//  * very large files.
//  * @param {string} filePath the path to a file to store
//  * @returns {File} a File object containing the file content
//  */
// async function fileFromPath(filePath) {
//   const content = await fs.promises.readFile(filePath);
//   const type = mime.getType(filePath);
//   return new File([content], path.basename(filePath), { type });
// }

export const getIPFSGatewayURL = ipfsURL => {
  let urlArray = ipfsURL.split("/");
  let ipfsGateWayURL = `https://ipfs.io/ipfs/${urlArray[2]}/${urlArray[3]}`;
  return ipfsGateWayURL;
};

export const getLines = content => content.split(/\r?\n/);

export const wrapText = (ctx, text, x, y, maxTextWidth, lineHeight) => {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n += 1) {
    const testLine = `${line + words[n]} `;
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxTextWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = `${words[n]} `;
      // eslint-disable-next-line no-param-reassign
      y += lineHeight * 1.2;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
};

export const generateNFT = async (new_params, canvasConfig) => {
  const names = new_params.name.split(".");
  let actualName = "";
  for (let i = 0; i < names.length - 1; i += 1) {
    actualName += names[i];
    if (i < names.length - 2) actualName += ".";
  }
  const imageCanvas = createCanvas(canvasConfig.width, canvasConfig.height);
  const ctx = imageCanvas.getContext("2d");
  loadImage(paths.bgImage).then(async data => {
    ctx.drawImage(data, 0, 0);
    ctx.fillStyle = "rgba(30, 144, 255, 0.1)";
    ctx.fillRect(0, 0, 2500, 2500);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    console.log("length of name: ", actualName.length);
    if (actualName.length < 10) {
      ctx.font = fonts.postTitlexl;
    } else if (actualName.length >= 10 && actualName.length < 15) {
      ctx.font = fonts.postTitlemd;
    } else if (actualName.length >= 15 && actualName.length < 20) {
      ctx.font = fonts.postTitlesm;
    } else {
      ctx.font = fonts.site;
    }
    let drawX = 1250;
    let drawY = 1500;
    let maxWidth = 2400;
    ctx.fillText(actualName, drawX, drawY, maxWidth);

    const metadata = await client.store({
      name: new_params.name,
      tokenId: new_params.tokenId.toString(),
      description:
        "WENS is a naming service designed to support the Ethereum ecosystem and its various subnets.",
      image: new File(
        [imageCanvas.toBuffer("image/png")],
        `${new_params.tokenId.toString()}.png`,
        { type: "image/png" }
      ),
      external_url: ""
    });

    console.log("IPFS URL for the metadata:", getIPFSGatewayURL(metadata.url));

    let sql = `INSERT INTO metadata (tokenId, domain,  url, address, registered_at)
    VALUES (?, ?, ?, ?, ?)`;

    const db = connectDB();
    // insert one row into the langs table
    db.run(
      sql,
      [
        new_params.tokenId.toString(),
        new_params.name,
        getIPFSGatewayURL(metadata.url),
        new_params.address,
        new Date().toString("YYYY-mm-dd HH:ii:ss")
      ],
      function(err) {
        if (err) {
          return console.log(err.message);
        }
      }
    );
    disconnectDB(db);
  });
};
