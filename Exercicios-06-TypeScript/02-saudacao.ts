// Saudação
function saudacaoAtleta(nome: string, faixa: string, atleta?: boolean): string {
    if (atleta) {
        return `Olá, ${nome}! Você é faixa preta de jiu-jitsu e um atleta dedicado. Parabéns pelo esforço!`;
    } else {
        return `Olá, ${nome}! Você é faixa ${faixa} de jiu-jitsu. Continue treinando!`;
    }
}

// Testando a função
console.log(saudacaoAtleta("Borealis", "preta", true)); 
console.log(saudacaoAtleta("Evelly", "roxa"));