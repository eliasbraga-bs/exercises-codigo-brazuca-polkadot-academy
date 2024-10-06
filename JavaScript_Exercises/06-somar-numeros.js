// 6. Calcule a soma de todos os números de 1 a 100.
function somaAte100() {
  soma = 0;
  for (let contador = 1; contador <= 100; contador++) {
    soma += contador;
  }

  return soma;
}

console.log(somaAte100());
