// Função genérica para reverter um array com opções de transformação
function reverterArray<T>(items: T[], transformacao?: (item: T) => T): T[] {
    // Se uma transformação for fornecida, aplica-a ao array
    if (transformacao) {
        items = items.map(transformacao);
    }
    // Retorna o array invertido
    return items.reverse();
}

// Testando com diferentes tipos de arrays e transformações

// Array de números
console.log(reverterArray([1, 2, 3])); 

// Array de strings
console.log(reverterArray(["a", "b", "c"]));
// Array de números com transformação (multiplicando os valores por 2 antes de inverter)
console.log(reverterArray([1, 2, 3], num => num * 2)); 

// Array misto de tipos (strings e números), filtrando valores false antes de inverter
console.log(reverterArray([1, "a", "", 0, "b"], item => item || "Valor Válido")); 
