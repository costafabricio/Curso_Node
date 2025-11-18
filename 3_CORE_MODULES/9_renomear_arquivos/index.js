const fs = require('fs')

const arqAntigo = 'arqAntigo.txt'
const arqNovo = 'arqNovo.txt'

fs.rename(arqAntigo,arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('Arquivo renomeado com sucesso!')
})