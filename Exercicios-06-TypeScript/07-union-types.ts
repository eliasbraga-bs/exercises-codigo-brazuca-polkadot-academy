// Função que aceita string, number ou boolean e manipula o valor conforme o tipo
function formatarEntrada(valor: string | number | boolean): string | number {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    } else if (typeof valor === "number") {
        return valor * 10;
    } else if (typeof valor === "boolean") {
        return valor ? "Valor é verdadeiro" : "Valor é falso";
    }
    return valor; 
}

// Testando a função com diferentes tipos de entrada
console.log(formatarEntrada("typescript"));
console.log(formatarEntrada(5));
console.log(formatarEntrada(true));
console.log(formatarEntrada(false));
