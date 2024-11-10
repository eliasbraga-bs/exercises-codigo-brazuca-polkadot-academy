programa
{
	
	funcao inicio()
	{
		inteiro number, contador = 0

		para(inteiro i = 1; i <= 5; i++)
		{
			escreva("Digite o número ", i, ": ")
			leia(number)

			se (number > 0)
			{
				contador++	
			}	
		}

		escreva("Você digitou ", contador, " números positivos.0")
	}
}
