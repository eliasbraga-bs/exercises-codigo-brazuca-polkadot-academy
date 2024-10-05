// 16 - Verifique se uma string é um palindromo
function ePalidromo(texto) {
  let inverta = texto.split("").reverse().join("");
  return texto === inverta;
}

console.log(ePalidromo("arara"));
