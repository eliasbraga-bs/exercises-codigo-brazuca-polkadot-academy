# - Atividade 9: Ordenação de Números

# Solicita três números ao usuário
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))

# Ordena os números usando condições if-else
if num1 <= num2 <= num3:
    ordem = [num1, num2, num3]
elif num1 <= num3 <= num2:
    ordem = [num1, num3, num2]
elif num2 <= num1 <= num3:
    ordem = [num2, num1, num3]
elif num2 <= num3 <= num1:
    ordem = [num2, num3, num1]
elif num3 <= num1 <= num2:
    ordem = [num3, num1, num2]
else:
    ordem = [num3, num2, num1]

# Exibe os números em ordem crescente
print(f"Os números em ordem crescente são: {ordem}")
