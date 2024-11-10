# - Atividade 2: Conversão de Temperaturas

# Solicita a temperatura em Celsius ao usuário
celsius = float(input("Digite a temperatura em Celsius: "))

# Converte Celsius para Fahrenheit
fahrenheit = (celsius * 9/5) + 32

# Converte Celsius para Kelvin
kelvin = celsius + 273.15

# Exibe os resultados
print(f"A temperatura em Fahrenheit é: {fahrenheit}°F")
print(f"A temperatura em Kelvin é: {kelvin}K")
