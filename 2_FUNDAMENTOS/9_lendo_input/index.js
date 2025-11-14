const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('qaul a sua linguagem preferida? ', (language) => {
    console.log(`minha linguagem preferida é: ${language}`)
    readline.close()
})