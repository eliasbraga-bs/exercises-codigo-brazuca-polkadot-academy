# Atividade 15: Soma dos N primeiros Números

# Solicita ao usuário o valor de n
n = int(input("Digite um número inteiro n: "))

# Calcula a soma usando a fórmula da progressão aritmética
soma = n * (n + 1) // 2

# Exibe o resultado da soma
print(f"A soma dos primeiros {n} números naturais é: {soma}")
