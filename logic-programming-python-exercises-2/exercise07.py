# - Atividade 7: Média de Notas

# Inicializa variáveis para armazenar a soma das notas e a contagem
soma_notas = 0
quantidade_notas = 0

# Loop para solicitar notas até o usuário digitar -1
while True:
    nota = float(input("Digite uma nota (ou -1 para terminar): "))
    
    if nota == -1:  # Verifica se o usuário quer terminar o programa
        break
    
    # Acumula a soma das notas e incrementa a contagem
    soma_notas += nota
    quantidade_notas += 1

# Verifica se foram inseridas notas válidas antes de calcular a média
if quantidade_notas > 0:
    media = soma_notas / quantidade_notas
    print(f"A média das notas é: {media:.2f}")
else:
    print("Nenhuma nota foi inserida.")
