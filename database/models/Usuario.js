module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuarios';
    let cols = {

    }
    let config = {
        tableName: 'users',  
        timetamps: false
    }

    const Usuario = sequelize.define(alias, colm, config);

    return Usuario;
}