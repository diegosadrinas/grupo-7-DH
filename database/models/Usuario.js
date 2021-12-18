module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuarios';
    let cols = {
        id: {
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
        timetamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models){
        Usuario.belongsToMany(models.Productos, {
            as: "productos",
            through: "product_cart",
            foreignKey: "user_id",
            otherKey: "product_id",
            timetamps: false
        })

    return Usuario;
}}
