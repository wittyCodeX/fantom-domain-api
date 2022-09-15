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
  bgImage: './nft_bg.png',
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
  postTitlexl: 'bold 110px Kefa',
  postTitlelg: 'bold 90px Kefa',
  postTitlemd: 'bold 7px Kefa',
  postTitlesm: 'bold 50px Kefa',
  site: 'bold 30pt Kefa',
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
    ctx.fillStyle = 'rgba(30, 144, 255, 0.1)'
    ctx.fillRect(0, 0, 500, 500)
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    console.log('length of name: ', new_params.name.length)
    if (new_params.name.length < 7) {
      ctx.font = fonts.postTitlexl
    } else if (new_params.name.length >= 7 && new_params.name.length <= 10) {
      ctx.font = fonts.postTitlelg
    } else if (new_params.name.length > 10 && new_params.name.length < 14) {
      ctx.font = fonts.postTitlemd
    } else if (new_params.name.length >= 14 && new_params.name.length < 20) {
      ctx.font = fonts.postTitlesm
    } else {
      ctx.font = fonts.site
    }
    let drawX = 250
    let drawY = 300
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
      `./metadata/${new_params.tokenId.toString()}.json`,
      JSON.stringify({
        name: new_params.name,
        description:
          'FTMvy Domains is a naming service designed to support the Fantom ecosystem and its various subnets.',
        image: `${
          process.env.BACKEND_URL || 'https://fantom-domain-api.herokuapp.com'
        }/images/${new_params.tokenId.toString()}.png`,
      }),
      {
        flag: 'w',
      },
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('The file was saved!')
      },
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
