// 20-Retorne a soma dos dígitos de um número
function somaDosDigitos(numero) {
  return String(numero)
    .split("")
    .reduce((nemsei, onde) => nemsei + parseInt(onde), 0);
}

console.log(somaDosDigitos(986));
