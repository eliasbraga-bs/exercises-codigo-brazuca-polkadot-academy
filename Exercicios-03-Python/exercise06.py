# - Atividade 6: Contagem de Vogais

# Solicita uma frase ao usuário
frase = input("Digite uma frase: ")

# Define o conjunto de vogais
vogais = "aeiouAEIOU"

# Inicializa o contador de vogais
contagem_vogais = 0

# Percorre cada caractere da frase
for letra in frase:
    if letra in vogais:  # Verifica se o caractere é uma vogal
        contagem_vogais += 1

# Exibe o número de vogais encontradas
print(f"A frase contém {contagem_vogais} vogal(is).")
