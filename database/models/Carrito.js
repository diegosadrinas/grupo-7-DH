// si el modelo se llama Producto.js esto entiende por si solo que la tabla se llama prodcutos o Productos (nose si reconoce la Mayusucula)

module.exports = (sequelize, dataTypes) => {
    const alias = 'Carrito';
    let cols = {
        shopping_car_id:{
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
        tableName: 'carrito',  
        timetamps: false
    }

    const Carrito = sequelize.define(alias, colm, config);

    return Producto;
}