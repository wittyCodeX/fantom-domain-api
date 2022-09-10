const fs = require('fs')
const path = require('path')

const { createCanvas, loadImage, registerFont } = require('canvas')
// Import the NFTStorage class and File constructor from the 'nft.storage' package
const { NFTStorage, File } = require('nft.storage')
const mime = require('mime')

const NFT_STORAGE_KEY =
  process.env.NFT_STORAGE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE4NzlmN2YyOGNkRDIwNGY0M2VGNDE5OTEyRDU0MjFjRjg3RDVmRmEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Mjc3NTA1NDA5NSwibmFtZSI6ImZhbnRvbS1kb21haW4ifQ.b3DosH4PcLDQxkfmvG2qjUl3btM7_69rlcvstUBbsUw'
const paths = {
  images: './images',
  fonts: './fonts',
  database: './database.txt',
  bgImage: './nft_bg.jpg',
}
const customFonts = {
  postTitle: {
    file: 'kefa-regular.ttf',
    name: 'Kefa',
  },
  siteName: {
    file: 'menlo-regular.ttf',
    name: 'Menlo',
  },
}
const fonts = {
  postTitle: 'regular 90px Kefa',
  site: 'bold 30pt Menlo',
}
// Register custom fonts
Object.keys(customFonts).forEach((font) => {
  registerFont(`${paths.fonts}/${customFonts[font].file}`, {
    family: customFonts[font].name,
  })
})
/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
 * @param {string} imagePath the path to an image file
 * @param {string} name a name for the NFT
 * @param {string} description a text description for the NFT
 */
async function storeNFT(imagePath, name, description) {
  const image = await fileFromPath(imagePath)

  // create a new NFTStorage client using our API key
  const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

  // call client.store, passing in the image & metadata
  return nftstorage.store({
    image,
    name,
    description,
  })
}
/**
 * A helper to read a file from a location on disk and return a File object.
 * Note that this reads the entire file into memory and should not be used for
 * very large files.
 * @param {string} filePath the path to a file to store
 * @returns {File} a File object containing the file content
 */
async function fileFromPath(filePath) {
  const content = await fs.promises.readFile(filePath)
  const type = mime.getType(filePath)
  return new File([content], path.basename(filePath), { type })
}

module.exports.getLines = (content) => content.split(/\r?\n/)

module.exports.wrapText = (ctx, text, x, y, maxTextWidth, lineHeight) => {
  const words = text.split(' ')
  let line = ''

  for (let n = 0; n < words.length; n += 1) {
    const testLine = `${line + words[n]} `
    const metrics = ctx.measureText(testLine)
    const testWidth = metrics.width
    if (testWidth > maxTextWidth && n > 0) {
      ctx.fillText(line, x, y)
      line = `${words[n]} `
      // eslint-disable-next-line no-param-reassign
      y += lineHeight * 1.2
    } else {
      line = testLine
    }
  }
  ctx.fillText(line, x, y)
}

module.exports.generateNFT = async (new_params, canvasConfig) => {
  const imageCanvas = createCanvas(canvasConfig.width, canvasConfig.height)
  const ctx = imageCanvas.getContext('2d')
  const textWidth = ctx.measureText(new_params.name).width
  loadImage(paths.bgImage).then(async (data) => {
    ctx.drawImage(data, 0, 0)
    ctx.fillStyle = 'rgba(30, 144, 255, 0.4)'
    ctx.fillRect(0, 0, 390, 390)
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = fonts.postTitle
    let drawX = 200
    let drawY = 200
    ctx.fillText(new_params.name, drawX, drawY)
    fs.writeFileSync(
      `${paths.images}/${new_params.tokenId.toString()}.png`,
      imageCanvas.toBuffer('image/png'),
    )
    const result = await storeNFT(
      `${paths.images}/${new_params.tokenId.toString()}.png`,
      new_params.tokenId.toString(),
      'FTMvy Domains is a naming service designed to support the Fantom ecosystem and its various subnets.',
    )
    fs.writeFile(
      './nft_list.txt',
      JSON.stringify(result),
      {
        flag: 'a',
      },
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('The file was saved!')
      },
    )
    console.log(JSON.stringify(result))
  })
}
