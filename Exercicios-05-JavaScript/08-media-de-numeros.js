// 8. Crie uma função que retorne a média de uma lista de números.
function media(lista) {
  const soma = lista.reduce((a, b) => a + b, 0);
  return soma / lista.length;
}

console.log(media([21, 30, 40, 65, 90, 95]));
