// npm install inquirer@8.1.2
// npm install chalk@4.1.2

const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual é o seu nome ?'
},{
    name: 'p2',
    message: 'Quantos anos voce tem ?'
}])
.then((answers) =>{

    if(!answers.p1 || !answers.p2){
        throw new Error('o nome e a idade são obrigatorios!')
    }

    console.log(chalk.bgYellow.black(`Seu nome é: ${answers.p1}`))
    console.log(chalk.bgYellow.black(`Voce tem ${answers.p2} anos`))
}).catch((err) =>{
    console.log(err)
})