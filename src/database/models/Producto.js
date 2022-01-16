module.exports = (sequelize, dataTypes) => {
    const alias = 'Producto';
    let cols = {
        product_id: {
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
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models){
        Producto.belongsToMany(models.Usuario, {
            as: "usuarios",
            through: "product_cart",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false
        })

    }

    return Producto;
} 