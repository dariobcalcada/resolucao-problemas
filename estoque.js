saldo = parseInt(prompt("Inserir saldo inicial"));
termina = "n";
while (termina == "n")
{
    tipo_entrada = parseInt(prompt("Qual o tipo de entrada? Compra = 1 Venda = 2"));
    quantidade = parseInt(prompt("Qual a quantidade?"));
    if (tipo_entrada == 1)
    {
        saldo = saldo + quantidade;
    }
    else
    { if(tipo_entrada == 2)
        {
            if(saldo >= quantidade)
            {
                saldo = saldo - quantidade;
            }
            else
            {
                document.write("Saldo insuficiente <br>");
            }
        }
        else
        {
            document.write("Tipo de entrada inválido <br>");
        }
    }
   
    document.write("O saldo atualizado é:" + saldo + "<br>");
    termina = parseInt(prompt("Deseja continuar a inserção? Sim(s) Não(n)"));
}
document.write("Sistema Encerrado");
