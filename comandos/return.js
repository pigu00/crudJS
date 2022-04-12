const { tasks } = require("../tasksData.js");


  
  const retornar = (arr, tituloABuscar) =>{
    let elementoARetornar = "no encontrado"
  
    for (let i = 0; i < arr.length; i++) {
      const titulo = arr[i].title;
      const descrip = arr[i].desc
      if(titulo === tituloABuscar){
        elementoARetornar = descrip
      }
  }
return elementoARetornar
    
  }

      
    // }
    
    // console.log(retornar());

module.exports = {retornar}