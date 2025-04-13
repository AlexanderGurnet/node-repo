// const _ = require('lodash')
// const { readFile } = require('fs')

// console.log('before')
// readFile('./text.txt', 'utf-8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
// })
// console.log('after')

// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, id) => {
//   console.log('data received |', name, id)
// })

// customEmitter.emit('response', 'John', 34)

// const { writeFileSync } = require('fs')

// for (let i = 0; i < 100000; i++) {
//   writeFileSync('./text.txt', `hello ${i}\n`, { flag: 'a' })
// }

let http = require('http')
let fs = require('fs')

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./text.txt', 'utf-8')
    // req.end(text)

    const fileStream = fs.createReadStream('./text.txt')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
  })
  .listen(5001)
