// 17 - Ordene uma lista de números
function ordenarLista(lista) {
  return lista.sort((numero1, numero2) => numero1 - numero2);
}

console.log(ordenarLista([13, 3, 56, 2, 1]));
