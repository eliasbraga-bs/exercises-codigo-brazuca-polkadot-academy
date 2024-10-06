// 27-Retorne a soma dos números pares de uma lista
function somaDosPares(lista) {
  return lista
    .filter((numero) => numero % 2 === 0)
    .reduce((nemsei, onde) => nemsei + onde, 0);
}

console.log(somaDosPares([1, 2, 3, 4, 5]));
