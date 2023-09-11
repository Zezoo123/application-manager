module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        userID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userLevel: {
            type: DataTypes.INTEGER,
            defaultValue: 3
        }
    });

    return users;
};