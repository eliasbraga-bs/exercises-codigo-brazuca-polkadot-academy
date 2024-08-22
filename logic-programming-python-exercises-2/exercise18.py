# - Atividade 18: Contagem de Palavras

# Solicita uma frase ao usuário
frase = input("Digite uma frase: ")

# Divide a frase em palavras usando espaços como delimitadores
palavras = frase.split()

# Conta o número de palavras
numero_de_palavras = len(palavras)

# Exibe o número de palavras
print(f"A frase contém {numero_de_palavras} palavras.")
