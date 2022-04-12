const {tasks} = require('../tasksData.js')

// var valorAFiltrar = process.argv;
// var filtrar = tasks;

// for (let i = 0; i < filtrar.length; i++) {
//     let filtro = filtrar.filter(a => a.title == valorAFiltrar[2])
//     // filtrar.filter(filtrar = valorAFiltrar[1])
//     console.log (filtro)
// }

// console.log(result);

function filter(arr, texto) {
    
const tareas = []

    for (let i = 0; i < arr.length; i++) {
      const tarea = arr[i]
      const titulo = tarea.title
  

      if (titulo.includes(texto)) {
        tareas.push(tarea)
      }
  
    } return tareas
    
  }
//   console.log(filter());


  module.exports = {filter}