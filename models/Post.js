//Pegando as configurações do arquivo db.js
// ./  indica que está na mesma pasta
const db = require("./db");

//Criando a tabela
const Post = db.sequelize.define('postagens',{
    titulo : {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;

//Post.sync({force:true});

