import * as readlineSync from 'readline-sync';

export function verificarClave(): void {
  const claveIngresada: string = readlineSync.question("Ingrese la clave: ");

  if (claveIngresada === "EURECA") {
    console.log("Acceso permitido.");
  } else {
    console.log("La clave es incorrecta. No se permite el acceso.");
  }
}
