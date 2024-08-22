# Define uma função para verificar se um número é primo
def eh_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero ** 0.5) + 1):
        if numero % i == 0:
            return False
    return True

# Solicita ao usuário o intervalo
inicio = int(input("Digite o início do intervalo: "))
fim = int(input("Digite o fim do intervalo: "))

# Encontra e imprime todos os números primos no intervalo
print(f"Números primos entre {inicio} e {fim}:")
for num in range(inicio, fim + 1):
    if eh_primo(num):
        print(num)
