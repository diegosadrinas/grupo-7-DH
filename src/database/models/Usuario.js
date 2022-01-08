module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuario';
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.CHAR,
        },
        last_name: {
            type: dataTypes.CHAR,
        },
        email: {
            type: dataTypes.CHAR,
        },
        password: { 
            type: dataTypes.STRING,
        },
        is_admin: {
            type: dataTypes.BOOLEAN
        }
    }
    let config = {
        tableName: 'users',  
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models){
        Usuario.belongsToMany(models.Producto, {
            as: "productos",
            through: "shopping_cart",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false
        })
    }

    return Usuario;
}