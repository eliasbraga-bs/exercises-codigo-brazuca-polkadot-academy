// 21- Verifique de dois números são múltiplos
function saoMultiplos(numero1, numero2) {
  return numero1 % numero2 === 0 || numero2 % numero1 === 0;
}

console.log(saoMultiplos(12, 4));
