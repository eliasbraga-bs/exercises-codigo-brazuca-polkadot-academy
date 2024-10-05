// 11 - Calcule o fatorial de um número
function fatorial(numero) {
  if (numero === 0) return 1;
  let resultado = 1;
  for (let contador = numero; contador > 1; contador--) {
    resultado *= contador;
  }
  return resultado;
}

console.log(fatorial(5));
