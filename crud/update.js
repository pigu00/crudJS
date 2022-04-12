
const { read } = require("./read.js");
const { write } = require('./writejson.js');


function update(direccion, titulo, newDesc) {
    const newArr = []
    var data = read(direccion)
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        const tituloTemp = data[i].title
        const descTemp = data[i].desc
        if (titulo === tituloTemp) {
            element = { title: titulo, desc: newDesc }
            newArr.push(element)
        } else {
            newArr.push(element)
        }
    }
    // console.log(newArr);
    return write(newArr,direccion)
}


module.exports = {update}