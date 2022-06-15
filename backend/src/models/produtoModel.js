module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define("produto", {
        nome: {
            type: Sequelize.STRING
        }
    });
    return Produto;
};