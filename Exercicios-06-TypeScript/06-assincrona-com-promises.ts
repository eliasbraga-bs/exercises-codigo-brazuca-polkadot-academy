// Função assíncrona para buscar dados com tempo variável
function buscarDados(): Promise<string> {
    // Variando o tempo de resposta entre 1 e 3 segundos
    const tempoDeResposta = Math.floor(Math.random() * 3000) + 1000;
    
    return new Promise(resolve => {
        setTimeout(() => resolve(`Dados carregados em ${tempoDeResposta}ms`), tempoDeResposta);
    });
}

// Função para exibir os dados
async function exibirDados(): Promise<void> {
    console.log("Iniciando a busca...");
    
    // Espera por 3 chamadas de busca de dados
    const dados1 = await buscarDados();
    console.log(dados1);
    
    const dados2 = await buscarDados();
    console.log(dados2);
    
    const dados3 = await buscarDados();
    console.log(dados3);
}

// Chamando a função para exibir os dados
exibirDados();
