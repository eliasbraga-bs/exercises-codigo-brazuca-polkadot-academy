# Define a função para verificar se o número é par ou ímpar
def verifica_par_ou_impar(numero):
    if numero % 2 == 0:
        return "par"
    else:
        return "ímpar"

# Solicita um número ao usuário
num = int(input("Digite um número: "))

# Chama a função e exibe o resultado
resultado = verifica_par_ou_impar(num)
print(f"O número {num} é {resultado}.")
