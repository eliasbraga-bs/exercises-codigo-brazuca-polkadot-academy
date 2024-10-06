// 15 - Conte quantas vezes um caractere aparece em uma string
function contaCaractere(texto, caractere) {
  let contador = 0;
  for (let onde of texto) {
    if (onde === caractere) contador++;
  }
  return contador;
}

console.log(contaCaractere("javascript", "a"));
