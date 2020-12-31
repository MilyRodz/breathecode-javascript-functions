 
const rapid = (texto) => {
    var vocales = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }; 

  var result = "";

  for (let i = 0; i < texto.length; i++){
      let letra = texto[i].toLowerCase();
      if(!vocales[letra]){
        result += texto[i].toUpperCase();
      } 
      else {
          result += texto[i];
      }
  }
  return result;
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));









   