const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err        
//     }
//     console.log('New folder "test"')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello Alex!!!', err => {
//     if (err) {
//         throw err 
//     }
//     console.log('File make!')

//     fs.appendFile(filePath, '\nHello again!!!', err => {
//         if (err) {
//             throw err 
//         }
//         console.log('File make!')
//     })
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err 
    }

    console.log(content)

    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
})