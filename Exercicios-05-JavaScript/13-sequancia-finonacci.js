// 13 - Imprima a seguência de Finonacci o décimo termo
function fibonacciAteDecimoTermo() {
  let fibo = [0, 1];
  for (let contador = 2; contador < 10; contador++) {
    fibo.push(fibo[contador - 1] + fibo[contador - 2]);
  }
  console.log(fibo);
}

fibonacciAteDecimoTermo();
