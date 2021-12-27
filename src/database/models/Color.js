module.exports = (sequelize, dataTypes) => {
    const alias = 'Color';
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
        tableName: 'color',  
        timetamps: false
    }

    const Color = sequelize.define(alias, cols, config);

    return Color;
} 