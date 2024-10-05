// 3. Verifique se um número é par ou ímpar.
function numeroParOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(`O número é: ${numeroParOuImpar(5)}`);
