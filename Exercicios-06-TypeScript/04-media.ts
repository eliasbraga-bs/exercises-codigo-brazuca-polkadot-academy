// Função para calcular a média de um array de números
function calcularMedia(numeros: number[]): number {
    if (numeros.length === 0) {
        throw new Error("O array não pode estar vazio");
    }

    const total = numeros.reduce((acc, numero) => acc + numero, 0);
    const media = total / numeros.length;
    
    // Retorna a média arredondada para duas casas decimais
    return parseFloat(media.toFixed(2));
}

// Testando a função com diferentes tipos de valores
console.log(calcularMedia([10, 20, 30, 40]));
console.log(calcularMedia([10.5, 20.75, 30.25, 40.1]));
console.log(calcularMedia([-10, -20, 30, 40]));
console.log(calcularMedia([-5.5, -3.3, 0, 8.8, 2.1]));
