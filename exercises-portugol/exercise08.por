programa {
    funcao inicio() {
        inteiro ano

        escreva("Digite um ano: ")
        leia(ano)

        se (ano % 400 == 0) {
            escreva("O ano é bissexto")
        } senao se (ano % 100 == 0) {
            escreva("O ano não é bissexto")
        } senao se (ano % 4 == 0) {
            escreva("O ano é bissexto")
        } senao {
            escreva("O ano não é bissexto")
        }
    }
}