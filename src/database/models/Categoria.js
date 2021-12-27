module.exports = (sequelize, dataTypes) => {
    const alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.CHAR,
        }
    }
    let config = {
        tableName: 'categoria',  
        timetamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
} 