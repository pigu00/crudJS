

const fs = require('fs')
const path = require('path')
const {read} = require ("./read.js")
const { write } = require('./writejson.js');

function borrar (filePath, titulo){
    const newArr = []
    var data = read(filePath)

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const tituloTemp = data[i].title

        if (titulo !== tituloTemp){
            newArr.push(element)
        }
        
    } return write(newArr,filePath)
}

// console.log (borrar('./foo.json', 'nadar'))
module.exports = {borrar}
