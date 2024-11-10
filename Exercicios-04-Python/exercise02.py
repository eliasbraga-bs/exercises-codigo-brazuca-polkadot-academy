# Função para verificar se um número é primo
def eh_primo(numero):
    if numero < 2:
        return False
    if numero == 2:
        return True
    if numero % 2 == 0:
        return False
    for i in range(3, int(numero ** 0.5) + 1, 2):
        if numero % i == 0:
            return False
    return True

# Função para calcular a soma dos dígitos de um número
def soma_digitos(numero):
    soma = 0
    while numero > 0:
        soma += numero % 10
        numero //= 10
    return soma

try:
    # Solicita ao usuário os números inicial e final do intervalo
    inicio = int(input("Digite o número inicial do intervalo: "))
    fim = int(input("Digite o número final do intervalo: "))

    # Inicializa uma variável para armazenar o número mágico (se encontrado)
    numero_magico = None

    # Percorre todos os números do intervalo
    for numero in range(inicio, fim + 1):
        # Verifica se o número é divisível por 4
        if numero % 4 == 0 and eh_primo(numero) and soma_digitos(numero) % 2 != 0:
            numero_magico = numero
            break  # Para o loop ao encontrar o número mágico

    # Exibe o resultado
    if numero_magico:
        print(f"O Número Mágico é: {numero_magico}")
    else:
        print("Nenhum Número Mágico foi encontrado no intervalo.")

except ValueError:
    print("Erro: Por favor, insira um número inteiro válido.")