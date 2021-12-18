// si el modelo se llama Producto.js esto entiende por si solo que la tabla se llama prodcutos o Productos (nose si reconoce la Mayusucula)

module.exports = (sequelize, dataTypes) => {
    const alias = 'Productos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.CHAR,
        },
        description: {
            type: dataTypes.CHAR,
        },
        img_url: {
            type: dataTypes.CHAR,
        },
        category_id: {
            type: dataTypes.INTEGER,
        },
        color_id: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'products',  
        timetamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models){
        Producto.belongsToMany(models.Usuarios, {
            as: "usuarios",
            through: "product_cart",
            foreignKey: "product_id",
            otherKey: "user_id",
            timetamps: false
        })

    }

    return Producto;
}