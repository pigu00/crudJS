const fs = require("fs");
const path = require("path");
const { read } = require("./crud/read.js");
const { write } = require("./crud/writejson.js");
const { create } = require("./crud/create.js");
const { borrar } = require("./crud/delete.js");
const { update } = require("./crud/update.js");

const filePath = "./tasksData.json";

const entrada = process.argv;

const comando = entrada[2];
const param1 = entrada[3];
const param2 = entrada[4];

switch (comando) {
  case "read":
    console.log(read(filePath));
    break;
    case "edit":
    update(filePath, param1, param2);
    console.log(`${param1} se actualizó`);
    break;
    case "delete":
    borrar(filePath, param1);
    console.log(`${param1} fue eliminado`);
    break;
    case "add":
    create(filePath, param1, param2);
    console.log(`${param1} fue creado`);
    break;
    case "list": console.log('read', 'add', 'delete', 'create');
    break;
  default:
    console.log("Ingrese una opción valida: read, update, delete, create");
}

