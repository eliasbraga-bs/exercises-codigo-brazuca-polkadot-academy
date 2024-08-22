programa {	
	funcao inicio()
	{
		inteiro number

		escreva("Digite um número para ver sua tabuada: ")
		leia(number)

		para(inteiro i = 1; i <= 10; i++)

		escreva(number, "x", i, "=", number * i, "\n")
	}
}
