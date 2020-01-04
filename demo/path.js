const path = require('path')

console.log('File name: ', path.basename(__filename))

console.log('Name Directory: ', path.dirname(__dirname))
console.log('Name Directory: ', path.dirname(__filename))

console.log('Расширение файла: ', path.extname(__filename))

console.log('Parse: ', path.parse(__filename).name)

const pathServer = path.join(__dirname, 'server', 'index.html')

console.log(pathServer)

