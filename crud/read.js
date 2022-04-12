


const fs = require('fs')
// const path = require('path')

function read (filePath){
    var data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
 return data
}


module.exports = {read}
// console.log(read('../tasksData.json'))