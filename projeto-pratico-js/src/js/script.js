let transacoesSimuladas = 0;

document.getElementById("gas-form").addEventListener("input", function () {
  const valorTransacao = parseFloat(
    document.getElementById("valor-transacao").value
  );
  const complexidade = document.getElementById("complexidade").value;
  const calcularButton = document.getElementById("calcular");

  if (valorTransacao > 0 && complexidade) {
    calcularButton.disabled = false;
  } else {
    calcularButton.disabled = true;
  }
});

document.getElementById("gas-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const valorTransacao = parseFloat(
    document.getElementById("valor-transacao").value
  );
  const complexidade = document.getElementById("complexidade").value;
  const moeda = document.getElementById("moeda").value;

  if (valorTransacao <= 0 || !complexidade) {
    document.getElementById("valor-transacao").classList.add("error");
    document.getElementById("resultado").innerHTML =
      '<p style="color:red;">Por favor, insira um valor de transação válido.</p>';
    return;
  } else {
    document.getElementById("valor-transacao").classList.remove("error");
  }

  const precoGases = {
    baixa: 0.01,
    media: 0.05,
    alta: 0.1,
  };

  const taxaConversao = {
    DOT: 1,
    USD: 6, // Exemplo de taxa de conversão (1 DOT = 6 USD)
    EUR: 5, // Exemplo de taxa de conversão (1 DOT = 5 EUR)
    BRL: 30, // Exemplo de taxa de conversão (1 DOT = 30 BRL)
    GBP: 4.5, // Exemplo de taxa de conversão (1 DOT = 4.5 GBP)
  };

  const precoGas = precoGases[complexidade] || 0;
  const custoGasDOT = valorTransacao * precoGas;
  const custoGasConvertido = custoGasDOT * taxaConversao[moeda];

  // Atualizar contador de transações
  transacoesSimuladas++;
  document.getElementById(
    "contador-transacoes"
  ).textContent = `Transações Simuladas: ${transacoesSimuladas}`;

  // Atualizar resultado da transação
  document.getElementById("resultado").innerHTML = `
        <p>Valor da Transação: ${valorTransacao} DOT</p>
        <p>Complexidade: ${
          complexidade.charAt(0).toUpperCase() + complexidade.slice(1)
        }</p>
        <p>Custo Estimado do Gás: ${custoGasDOT.toFixed(2)} DOT</p>
        <p><strong>Custo Estimado do Gás (${moeda}): ${custoGasConvertido.toFixed(
    2
  )} ${moeda}</strong></p>`;

  // Adicionar ao histórico de transações
  const historicoLista = document.getElementById("historico-lista");
  const itemHistorico = document.createElement("li");
  itemHistorico.textContent = `Transação: ${valorTransacao} DOT, Complexidade: ${complexidade}, Custo: ${custoGasDOT.toFixed(
    2
  )} DOT (${custoGasConvertido.toFixed(2)} ${moeda})`;
  historicoLista.appendChild(itemHistorico);

  // Limpar histórico após 1 minuto
  setTimeout(() => {
    historicoLista.innerHTML = "";
    document.getElementById(
      "contador-transacoes"
    ).textContent = `Transações Simuladas: 0`;
    transacoesSimuladas = 0;
  }, 60000);
});
