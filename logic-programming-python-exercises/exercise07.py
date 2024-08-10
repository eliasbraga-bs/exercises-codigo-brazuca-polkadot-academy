# Inicializa uma lista vazia para a lista de compras
lista_compras = []

# Laço para adicionar itens à lista
while True:
    item = input("Digite um item para adicionar à lista de compras (ou 'sair' para terminar): ")
    
    if item.lower() == 'sair':
        break  # Sai do laço se o usuário digitar 'sair'
    
    lista_compras.append(item)  # Adiciona o item à lista

# Exibe a lista completa de compras
print("\nLista de Compras:")
for item in lista_compras:
    print("- " + item)
