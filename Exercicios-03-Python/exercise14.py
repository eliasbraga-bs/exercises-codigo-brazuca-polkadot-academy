# - Atividade 14: Calculadora Simples

# Solicita dois números ao usuário
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))

# Solicita ao usuário o tipo de operação
operacao = input("Digite a operação (+, -, *, /): ")

# Realiza a operação correspondente e exibe o resultado
if operacao == "+":
    resultado = numero1 + numero2
    print(f"O resultado de {numero1} + {numero2} é: {resultado}")
elif operacao == "-":
    resultado = numero1 - numero2
    print(f"O resultado de {numero1} - {numero2} é: {resultado}")
elif operacao == "*":
    resultado = numero1 * numero2
    print(f"O resultado de {numero1} * {numero2} é: {resultado}")
elif operacao == "/":
    # Verifica se o segundo número não é zero para evitar divisão por zero
    if numero2 != 0:
        resultado = numero1 / numero2
        print(f"O resultado de {numero1} / {numero2} é: {resultado}")
    else:
        print("Erro: Divisão por zero não é permitida.")
else:
    print("Operação inválida. Por favor, escolha entre +, -, *, ou /.")
