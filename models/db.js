// Pacote para comunicar com o banco
const Sequelize = require('sequelize'); 

//Conectando com o banco Sequelize(banco, usuario,senha, objeto json)
const sequelize = new Sequelize('postapp','root', 'caio99481345@', {
    host: "localhost", // máquina que quer se conectar
    dialect: 'mysql' //qual banco de dados que quer se conectar
}); 

//Exportando as duas variáveis criada nas variáveis const, pois cada model vai ficar em um arquivo especifico
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}