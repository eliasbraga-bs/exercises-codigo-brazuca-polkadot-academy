# - Atividade 4: Verificação de Palíndromo

def eh_palindromo(texto):
    # Remove espaços e converte para minúsculas
    texto_limpo = ''.join(caractere.lower() for caractere in texto if caractere.isalnum())
    
    # Compara o texto original com o texto invertido
    return texto_limpo == texto_limpo[::-1]

# Solicita uma palavra ou frase ao usuário
entrada = input("Digite uma palavra ou frase: ")

# Verifica se é um palíndromo
if eh_palindromo(entrada):
    print("É um palíndromo!")
else:
    print("Não é um palíndromo.")
