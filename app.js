const _ = require('lodash')
const { readFile } = require('fs')

console.log('before')
readFile('./text.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})
console.log('after')
