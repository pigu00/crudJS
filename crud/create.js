const fs = require('fs')


const {editar} = require ("../comandos/edit.js")
const {read} = require ("./read.js")
const {write} = require ("./writejson.js")

function create (filePath, title, desc){
    const objeto = editar (title, desc)

    var data = read(filePath)

    data.push(objeto)

 return write(data, filePath)
}


// console.log(create('../tasksData.json', "saltar", "100"))

module.exports = { create }



