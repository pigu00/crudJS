const {tasks} = require('../tasksData.js')



function buscar (arr, valorABuscar) {
  
  var encontrado = false
  
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i].title
    
    if (elemento === valorABuscar) {
      encontrado = true
    } 
  } return encontrado
}

// console.log(buscar())


// --------------------
// Esto asi funciona


// var find = tasks;

// var valorABuscar = process.argv;

// function buscar () {
  
//   var encontrado = false
  
//   for (let i = 0; i < find.length; i++) {
//     if (find[i].title === valorABuscar[3]) {
//       encontrado = true
//     } 
//   } return encontrado
// }

// console.log(buscar())



module.exports = {buscar}