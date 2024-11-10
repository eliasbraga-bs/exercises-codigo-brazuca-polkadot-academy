// 10 - Conte quantas vogais em uma string
function contarVogais(texto) {
  let contador = 0;
  const vogais = "aeiouAEIOU";
  for (let mesmo of texto) {
    if (vogais.includes(mesmo)) {
      contador++;
    }
  }
  return contador;
}

console.log(contarVogais("JavaScript"));
