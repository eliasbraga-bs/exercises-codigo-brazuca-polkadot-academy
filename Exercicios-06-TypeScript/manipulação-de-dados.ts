// Função para filtrar preços acima de um determinado valor e aplicar transformação
function filtrarPrecosAltos(precos: number[], corte: number): number[] {
    return precos
        .filter(preco => preco > corte)
        .map(preco => preco * 1.1);
}

// Testando a função com diferentes valores de corte
console.log(filtrarPrecosAltos([50, 150, 200, 30], 100));
console.log(filtrarPrecosAltos([50, 150, 200, 30], 50));
console.log(filtrarPrecosAltos([10, 20, 30, 150], 15)); 