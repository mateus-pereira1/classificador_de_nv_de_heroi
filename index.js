const entrada = require('prompt-sync')({sigint: true});
let nivel;
let name;
let continua;


console.log("***** BEM-VINDO, HERÓI *****");
continua = entrada("Você deseja avaliar seu nível ? Digite 'sim' para continuar ou 'não' para sair: ");



while(continua == "sim" || continua !="sim" && continua != "não")
{
    if(continua == "sim")
    {
    name = entrada("Por favor, informe seu nome: ")
    nivel = entrada("Certo, "+name+", agora digite o seu nível: ")

    if(nivel < 1000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Ferro")
    }

    if(nivel > 1000 && nivel < 2000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Bronze")
    }

    if(nivel > 2000 && nivel < 5000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Prata")
    }

    if(nivel > 5000 && nivel < 7000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Ouro")
    }

    if(nivel > 7000 && nivel < 8000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Platina")
    }

    if(nivel > 8000 && nivel < 9000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Ascendente")
    }

    if(nivel > 9000 && nivel < 10000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Imortal")
    }

    if(nivel > 10000)
    {
        console.log("O herói "+name+" com nível: "+nivel+" é elo Radiante")
    }
    continua = entrada("Você deseja avaliar outro herói? Digite 'sim' para continuar ou 'não' para sair: ")

}
if(continua != "não" && continua != "sim")
    {
        console.log("POr favor, digite um valor válido!")
        continua = entrada("Você deseja avaliar outro herói? Digite 'sim' para continuar ou 'não' para sair: ")
    }

    
}



if(continua == "não")
{
    console.log("Isso é uma pena!")
}







