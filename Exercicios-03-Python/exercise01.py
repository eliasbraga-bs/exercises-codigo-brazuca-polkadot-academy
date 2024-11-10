# Solicita um número inteiro ao usuário
numero = int(input("Digite um número inteiro para calcular o fatorial: "))

# Inicializa a variável para armazenar o fatorial
fatorial = 1

# Verifica se o número é negativo, zero ou positivo
if numero < 0:
    print("O fatorial não é definido para números negativos.")
elif numero == 0:
    print("O fatorial de 0 é 1.")
else:
    # Calcula o fatorial
    for i in range(1, numero + 1):
        fatorial *= i
    
    # Exibe o resultado
    print(f"O fatorial de {numero} é {fatorial}.")
