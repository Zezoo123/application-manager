module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("jobs", {
        jobID: {
            primaryKey: True,
            autoIncrement: True,
            type: DataTypes.INTEGER
        },
        jobName: {
            type: DataTypes.STRING,
        },
        jobStatus: {
            type: DataTypes.STRING,
        }
    });

    return users;
};