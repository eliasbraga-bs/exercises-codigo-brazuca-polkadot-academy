readme_content = """

# Simulador de Preço de Gás - Polkadot

Este projeto é um simulador de preço de gás baseado na blockchain Polkadot. Ele permite que o usuário insira um valor de transação em DOT, selecione a complexidade da transação e converta o custo para outras moedas.

## Descrição do Projeto

Este projeto simula o custo do gás de transações na blockchain Polkadot. O custo do gás é calculado de acordo com a complexidade da transação e o valor da transação em DOT, podendo ser convertido para outras moedas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como Utilizar o Simulador

1. Preencha o valor da transação em DOT.
2. Escolha a complexidade da transação (Baixa, Média, Alta).
3. Escolha a moeda para conversão (DOT, USD, EUR, BRL, GBP).
4. Clique no botão "Calcular Preço do Gás" para visualizar o custo estimado.

## Explicação do Código

### Estrutura HTML

O arquivo HTML define a estrutura do simulador de preço de gás, com os seguintes elementos principais:

- **Cabeçalho (`<head>`)**: Inclui o título da página e o link para o arquivo CSS.
- **Contêiner do Simulador (`.simulador-container`)**: Envolve todo o conteúdo principal da página.
- **Formulário de Simulação (`#gas-form`)**: Permite ao usuário inserir o valor da transação, escolher a complexidade e a moeda de conversão.
  - Campos: `valor-transacao`, `complexidade` e `moeda`.
  - **Botão "Calcular Preço do Gás"**: Inicialmente desabilitado, é habilitado quando todos os campos obrigatórios são preenchidos.
- **Histórico de Transações**: Exibe uma lista (`<ul>`) do histórico das transações simuladas.

### JavaScript (Interações e Lógica)

- **Habilitação do Botão de Calcular**: O botão é habilitado automaticamente quando o valor da transação é válido e a complexidade é selecionada.
- **Validação de Entrada**: Verifica se o valor inserido é maior que zero e se uma complexidade foi selecionada. Caso contrário, uma mensagem de erro é exibida.
- **Cálculo do Gás**: O cálculo do gás depende da complexidade da transação:
  - Baixa: 1% do valor da transação.
  - Média: 5% do valor da transação.
  - Alta: 10% do valor da transação.
- **Conversão de Moeda**: O custo do gás em DOT pode ser convertido para outras moedas (USD, EUR, BRL, GBP) usando uma taxa de conversão pré-definida.
- **Histórico de Transações**: O histórico de transações é atualizado a cada simulação. Ele é limpo automaticamente após um minuto.
