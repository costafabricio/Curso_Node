const chalk = require('chalk')

const nota = 10

if(nota>=5){
    console.log(chalk.green.bold("Parabens voce foi aprovado!"))
}else{
    console.log(chalk.bgRed.bold("sinto muito voce reprovou!"))
}