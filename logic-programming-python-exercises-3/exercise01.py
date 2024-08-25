# 1. Desvendando o Código Secreto da Polkadot

# Solicita ao usuário os números inicial e final do intervalo
inicio = int(input("Digite o número inicial do intervalo: "))
fim = int(input("Digite o número final do intervalo: "))

# Inicializa o total
total = 0

# Percorre todos os números do intervalo
for numero in range(inicio, fim + 1):
    # Verifica se o número é múltiplo de 3
    if numero % 3 == 0:
        total += numero  # Adiciona o número ao total
    # Verifica se o número é múltiplo de 5
    elif numero % 5 == 0:
        total -= numero  # Subtrai o número do total

# Exibe o valor total calculado
print(f"O valor total calculado é: {total}")