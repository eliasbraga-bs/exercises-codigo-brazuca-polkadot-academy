# Solicita a temperatura atual ao usuário
temperatura = float(input("Digite a temperatura atual em °C: "))

# Verifica a faixa de temperatura e exibe a mensagem correspondente
if temperatura > 30:
    print("Está quente.")
elif temperatura < 15:
    print("Está frio.")
else:
    print("Está agradável.")
