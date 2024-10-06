// 28- Multiplique todos os elementos de uma lista
function multipliqueElementos(lista) {
  return lista.reduce((nemsei, onde) => nemsei * onde, 1);
}

console.log(multipliqueElementos([5, 6, 8, 9, 3]));
