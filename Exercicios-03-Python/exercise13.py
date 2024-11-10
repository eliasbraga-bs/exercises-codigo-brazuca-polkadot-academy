# - Atividade 13: Soma de Números Pares

# Inicializa a variável para acumular a soma dos números pares
soma_pares = 0

# Itera pelos números de 1 a 100
for numero in range(1, 101):
    if numero % 2 == 0:  # Verifica se o número é par
        soma_pares += numero  # Adiciona o número par à soma

# Exibe o resultado da soma
print(f"A soma de todos os números pares entre 1 e 100 é: {soma_pares}")
