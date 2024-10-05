// 30- Conte quantos números impares existem em uma lista
function contarImpares(lista) {
  return lista.filter((numero) => numero % 2 !== 0).length;
}

console.log(contarImpares([1, 2, 3, 4, 5]));
