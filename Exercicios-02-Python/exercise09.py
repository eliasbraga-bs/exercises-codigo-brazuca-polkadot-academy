# Solicita uma frase ao usuário
frase = input("Digite uma frase: ")

# Solicita uma letra ao usuário
letra = input("Digite a letra que deseja contar: ")

# Conta quantas vezes a letra aparece na frase
quantidade = frase.count(letra)

# Exibe o resultado
print(f"A letra '{letra}' aparece {quantidade} vezes na frase.")
