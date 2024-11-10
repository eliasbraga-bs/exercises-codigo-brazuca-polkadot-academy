# - Atividade 5: Tabuada

# Solicita um número ao usuário
numero = int(input("Digite um número para ver sua tabuada: "))

print(f"\nTabuada de {numero}:")

# Loop de 1 a 10 para gerar a tabuada
for i in range(1, 11):
    resultado = numero * i
    print(f"{numero} x {i} = {resultado}")
