function generateScreen() {
    const fs = require('fs')

    const folderName = './Component'

    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName)
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = generateScreen()