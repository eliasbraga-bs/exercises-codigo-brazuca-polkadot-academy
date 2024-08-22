# - Atividade 17: Verificação de Número Perfeito

# Solicita um número ao usuário
numero = int(input("Digite um número: "))

# Inicializa a soma dos divisores próprios
soma_divisores = 0

# Encontra todos os divisores próprios do número
for i in range(1, numero):
    if numero % i == 0:
        soma_divisores += i

# Verifica se a soma dos divisores é igual ao número original
if soma_divisores == numero:
    print(f"{numero} é um número perfeito.")
else:
    print(f"{numero} não é um número perfeito.")
