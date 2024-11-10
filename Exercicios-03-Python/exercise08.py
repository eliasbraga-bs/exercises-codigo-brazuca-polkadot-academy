# - Atividade 8: Sequência de Fibonacci

# Solicita ao usuário o número de termos da sequência de Fibonacci
n = int(input("Quantos termos da sequência de Fibonacci você quer ver? "))

# Inicializa os dois primeiros termos da sequência
fibonacci = [0, 1]

# Gera a sequência até atingir o número de termos solicitado
for i in range(2, n):
    proximo = fibonacci[-1] + fibonacci[-2]
    fibonacci.append(proximo)

# Exibe os primeiros n termos da sequência de Fibonacci
print(f"Os primeiros {n} termos da sequência de Fibonacci são:")
print(fibonacci[:n])
