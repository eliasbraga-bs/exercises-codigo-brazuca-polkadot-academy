# - Atividade 3: Cálculo de IMC
# Solicita o peso
peso = float(input("Digite seu peso: "))

# Solicita a altura
altura = float(input("Digite sua altura: "))

# Calcula o IMC
imc = peso / (altura ** 2)

# Exibe o resultado do IMC
print(f"Seu Índice de Massa Corporal (IMC) é: {imc:.2f}")

