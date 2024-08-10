programa
{
	
	funcao inicio()
	{
		inteiro number, fatorial = 1

		escreva("Digite um número inteiro positivo: ")
		leia(number)

		para(inteiro i = 1; i <= number; i++)
		{
			fatorial = fatorial * i
		}

		escreva("O fatorial de ", number, " é: ", fatorial)
		
	}
}