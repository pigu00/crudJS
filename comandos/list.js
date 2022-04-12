
const {tasks} = require('../tasksData.js')

// var list = tasks

// // let titulos = []

// for (let i = 1; i < list.length; i++) {

//     console.log(list[i].title)
    
// 	}




function list (arr){
    let titulos = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element.title)
}
return titulos
}
// console.log(list(tasks))

module.exports = {list}