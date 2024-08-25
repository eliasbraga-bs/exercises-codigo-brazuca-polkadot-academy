# Desvendando o Código Secreto da Polkadot

Este script em Python solicita ao usuário os números inicial e final de um intervalo, calcula a soma dos números nesse intervalo que são múltiplos de 3 e subtrai a soma dos números que são múltiplos de 5. Ao final, exibe o valor total calculado.

## Passo a Passo

1. **Solicitação de Números**
   - O programa solicita ao usuário que digite o número inicial do intervalo.
   - O programa solicita ao usuário que digite o número final do intervalo.

2. **Cálculo do Valor Total**
   - Inicializa a variável `total` com o valor zero.
   - Percorre todos os números do intervalo utilizando um loop `for`.
   - Verifica se o número é múltiplo de 3:
     - Se sim, adiciona o número ao total.
   - Verifica se o número é múltiplo de 5:
     - Se sim, subtrai o número do total.

3. **Exibição do Resultado**
   - Exibe o valor total calculado ao usuário.

## Como Executar o Código
1. Certifique-se de ter o Python instalado em seu computador.
2. Abra um terminal na pasta onde o arquivo está localizado.
3. Execute o arquivo Python digitando `python nome_do_arquivo.py`.
4. Siga as instruções fornecidas pelo programa para inserir os números do intervalo.

`---`

# Número Mágico - README

Este é um programa em Python que encontra e exibe o "Número Mágico" dentro de um intervalo específico de números. Um "Número Mágico" é um número que é divisível por 4, é primo e a soma de seus dígitos é ímpar.

## Como usar o programa

1. **Executar o programa:** Para executar o programa, certifique-se de ter o Python instalado em seu computador. Em seguida, abra o terminal na pasta onde o arquivo Python está localizado e execute o comando `python nome_do_arquivo.py`.

2. **Entrada de dados:** O programa solicitará que você insira o número inicial e o número final do intervalo que deseja verificar em busca do "Número Mágico".

3. **Resultado:** Após fornecer os números do intervalo, o programa verificará cada número dentro desse intervalo. Se encontrar um "Número Mágico", ele será exibido na tela. Caso contrário, uma mensagem informando que nenhum "Número Mágico" foi encontrado será exibida.

## Detalhes do código

- O código foi dividido em duas funções principais: `eh_primo` e `soma_digitos`, que são responsáveis por verificar se um número é primo e calcular a soma dos seus dígitos, respectivamente.
- O programa utiliza um loop para percorrer todos os números dentro do intervalo fornecido e verifica se cada número atende às condições de ser um "Número Mágico".
- Caso um "Número Mágico" seja encontrado, o programa o exibirá na tela. Caso contrário, informará que nenhum foi encontrado.


`---`


# Bingo da Adivinhação na Rede Polkadot

Este é um jogo de Bingo simples criado em Python, onde o jogador recebe uma cartela com 5 números aleatórios de 1 a 75 e precisa acertar todos os números sorteados para completar a cartela.

## Como Jogar

1. Primeiramente, o programa gera uma cartela aleatória para o jogador.
2. Em seguida, ele começa a sortear números aleatórios de 1 a 75.
3. Se o número sorteado estiver na cartela do jogador, o jogador acerta e o número é removido da cartela.
4. O jogo continua até o jogador completar a cartela ou atingir o limite máximo de sorteios.
5. Se o jogador completar a cartela, ele vence o jogo. Caso contrário, o jogo é encerrado.


## Executando o Jogo

Para executar o jogo, basta rodar o arquivo `jogar_bingo.py` em um ambiente Python. Certifique-se de ter o Python instalado em seu sistema.

```bash
python jogar_bingo.py
```