/*
const fs = require('fs')

const folderName = './Component'

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
    }
} catch (err) {
    console.error(err)
}*/

const args = process.argv.slice(2)
console.log(args)