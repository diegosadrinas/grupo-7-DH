// si el modelo se llama Producto.js esto entiende por si solo que la tabla se llama prodcutos o Productos (nose si reconoce la Mayusucula)

module.exports = (sequelize, dataTypes) => {
    const alias = 'Productos';
    let cols = {

    }
    let config = {
        tableName: 'products',  
        timetamps: false
    }

    const Producto = sequelize.define(alias, colm, config);

    return Producto;
}