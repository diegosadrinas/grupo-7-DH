module.exports = (sequelize, dataTypes) => {
    const alias = 'Carrito';
    let cols = {
        product_cart_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: 'product_cart',  
        timetamps: false
    }

    const Carrito = sequelize.define(alias, cols, config);

    return Carrito;
} 