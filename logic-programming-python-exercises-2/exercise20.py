# - Atividade 20: Análise de Lista de Números

# Inicializa uma lista para armazenar os números
numeros = []

# Solicita ao usuário que insira números
while True:
    entrada = input("Digite um número (ou 'fim' para terminar): ")
    
    # Verifica se o usuário deseja terminar a entrada de números
    if entrada.lower() == 'fim':
        break
    
    try:
        # Converte a entrada para um número e adiciona à lista
        numero = float(entrada)
        numeros.append(numero)
    except ValueError:
        print("Entrada inválida. Por favor, digite um número ou 'fim'.")

# Verifica se a lista não está vazia
if numeros:
    # Calcula o maior, o menor e a média dos números
    maior = max(numeros)
    menor = min(numeros)
    media = sum(numeros) / len(numeros)
    
    # Exibe os resultados
    print(f"O maior número é: {maior}")
    print(f"O menor número é: {menor}")
    print(f"A média dos números é: {media:.2f}")
else:
    print("Nenhum número foi inserido.")
