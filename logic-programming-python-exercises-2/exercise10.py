# - Atividade 10: Números Pares e Ímpares

# Solicita um número inteiro ao usuário
numero = int(input("Digite um número inteiro: "))

# Verifica se o número é par ou ímpar
if numero % 2 == 0:
    print(f"O número {numero} é par.")
else:
    print(f"O número {numero} é ímpar.")
