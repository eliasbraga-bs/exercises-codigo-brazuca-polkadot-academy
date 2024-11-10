// 25- Substitua todas as vogais de uma string por '*'
function substituirVogais(texto) {
  return texto.replace(/[aeiouAEIOU]/g, "*");
}

console.log(substituirVogais("JavaScript"));
