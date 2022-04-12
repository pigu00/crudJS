const { list } = require("./comandos/list.js");
const { buscar } = require("./comandos/find.js");
const { filter } = require("./comandos/filter.js");
const { retornar } = require("./comandos/return.js");
const { editar } = require("./comandos/edit.js");
const { editarFull } = require("./comandos/edit - copia.js");
const { tasks } = require("./tasksData.js");

const entrada = process.argv;

const comando = entrada[2];
const param1 = entrada[3]
const param2 = entrada[4]
const param3 = entrada[5]
let salida = "comando no encontrado"

switch (comando) {
  case "lista":
    salida = list(tasks)
    break;

  case "buscar":
    salida = buscar(tasks, param1)
    break;

  case "filtrar": 
    salida = filter(tasks, param1)
    break;

  case "retornar":  
    salida = retornar (tasks, param1)
  break;

  case "editar":
  salida = editarFull(tasks, param1, param2)
    break;

  default:
    console.log(
      "Ingrese una opción valida: editar, filtrar, buscar, lista, retornar"
    );
}
console.log(salida)