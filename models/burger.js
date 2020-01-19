module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('burgers', {
        name: DataTypes.STRING,
        devour: DataTypes.BOOLEAN
    })

    return Model;
}