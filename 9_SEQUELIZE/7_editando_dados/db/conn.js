const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})

/* try {

sequelize.authenticate()
console.log('Conectamos com sucesso com o Sequelize')

} catch(err) {
    console.log('Nao foi possivel conectar: ', err)
} */

module.exports = sequelize