import random

def gerar_cartela():
    return random.sample(range(1, 76), 5)

def sortear_numero():
    return random.randint(1, 75)

def jogar_bingo():
    cartela = gerar_cartela()
    print(f"Sua cartela: {cartela}")
    
    numeros_sorteados = set()
    sorteios_necessarios = 0
    max_sorteios = 100  # Definindo um limite máximo de sorteios
    
    while cartela:
        numero = sortear_numero()
        
        if numero in numeros_sorteados:
            continue
        
        numeros_sorteados.add(numero)
        sorteios_necessarios += 1
        
        if numero in cartela:
            cartela.remove(numero)
            print(f"Você acertou! Números restantes na cartela: {cartela}")
        
        if sorteios_necessarios >= max_sorteios:
            print("Limite de sorteios atingido. Infelizmente, você não completou a cartela.")
            break
    
    if not cartela:
        print(f"Parabéns! Você completou sua cartela em {sorteios_necessarios} sorteios.")

jogar_bingo()