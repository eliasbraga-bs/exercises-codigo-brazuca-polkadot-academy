# - Atividade 19: Média Ponderada

# Solicita as três notas ao usuário
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))

# Define os pesos
peso1 = 2
peso2 = 3
peso3 = 5

# Calcula a média ponderada
media_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

# Exibe o resultado da média ponderada
print(f"A média ponderada das notas é: {media_ponderada:.2f}")
