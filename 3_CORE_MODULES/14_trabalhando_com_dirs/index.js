const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log("nao existe essa pasta!")
    fs.mkdirSync('minhapasta')
} else if (fs.existsSync('./minhapasta')){
    console.log("Agora existe essa pasta!")
}