// 24- Retorne os divisores de um número
function divisores(numero) {
  let resultado = [];
  for (let contador = 1; contador <= numero; contador++) {
    if (numero % contador === 0) resultado.push(contador);
  }
  return resultado;
}

console.log(divisores(22));
