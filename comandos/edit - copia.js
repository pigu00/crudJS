// function editar (title, desc){
// let obj = {}
// obj.title = title
// obj.desc = desc

const { tasks } = require("../tasksData");

//     return obj
// }
const fs = require('fs')

function editarFull(arr, tituloTarea, modificacion) {
    let obj = {}
    
    for (let i = 0; i < arr.length; i++) {
        const titulo = arr[i].title;
        // const descripcion = arr[i].desc;
        
        if (titulo === tituloTarea) {
            arr[i].desc = modificacion
            // obj = tasks
        }
        let dataparseada = JSON.stringify(tasks, null, 2)
        fs.writeFileSync('../tasksData.js', dataparseada)
    } return tasks
}

module.exports = { editarFull};
