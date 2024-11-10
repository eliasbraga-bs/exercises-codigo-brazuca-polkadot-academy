// 14- Remova todos os espaços de uma string
function removerEspacos(texto) {
  return texto.replace(/\s+/g, "");
}

console.log(removerEspacos("Eu vou ser um programodor muito top."));
