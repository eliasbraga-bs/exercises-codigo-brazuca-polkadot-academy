// Enum com os dias da semana e feriados
enum DiasSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
    // Feriados adicionados ao enum
    AnoNovo = "Ano Novo",
    Carnaval = "Carnaval",
    Tiradentes = "Tiradentes",
    DiaDoTrabalho = "Dia do Trabalho",
    Independencia = "Independência do Brasil",
    Consiência = "Consciência Negra",
    Natal = "Natal",
}

// Função que verifica se o dia é fim de semana ou feriado
function ehFimDeSemanaOuFeriado(dia: DiasSemana): boolean {
    const feriados = [
        DiasSemana.AnoNovo,
        DiasSemana.Carnaval,
        DiasSemana.Tiradentes,
        DiasSemana.DiaDoTrabalho,
        DiasSemana.Independencia,
        DiasSemana.Consiência,
        DiasSemana.Natal
    ];

    return dia === DiasSemana.Sabado || dia === DiasSemana.Domingo || feriados.includes(dia);
}

// Testando a função
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Domingo)); 
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Quinta));
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Natal));
console.log(ehFimDeSemanaOuFeriado(DiasSemana.Carnaval));
