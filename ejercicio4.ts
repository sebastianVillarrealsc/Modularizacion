// suma de dos numeros //

import * as readlineSync from "readline-sync";
let primerNumero:number= readlineSync.questionInt("ingrese primer numero");
console.log("el primer numero es",primerNumero);
let segundoNumero:number=readlineSync.questionInt("ingrese segundo numero");
console.log("el segundo numero es", segundoNumero);
export let resultado:number=primerNumero+segundoNumero
console.log ("el resultado es " , resultado);