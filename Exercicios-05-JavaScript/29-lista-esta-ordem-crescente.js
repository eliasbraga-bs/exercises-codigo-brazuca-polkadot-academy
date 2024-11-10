// 29- Verifique se uma lista está em ordem crescente
function listaEmOrdemCrescente(lista) {
  for (let contador = 0; contador < lista.length - 1; contador++) {
    if (lista[contador] > lista[contador + 1]) return false;
  }
  return true;
}

console.log(listaEmOrdemCrescente([10, 13, 26, 38, 50]));
