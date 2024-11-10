//7. Verifique se um número é primo.
function numeroPrimo(numero) {
  if (numero < 1) return false;
  for (let contador = 2; contador < numero; contador++) {
    if (numero % contador === 0) return false;
  }
  return true;
}
console.log(numeroPrimo(9));
