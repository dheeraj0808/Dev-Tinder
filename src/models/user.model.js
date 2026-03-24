const { DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
    const User = sequelize.define("User", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true,
            validate: {
                notEmpty: true,
                len: [6, 100]
            }
        },
        role: {
            type: DataTypes.ENUM("user", "admin"),
            defaultValue: "user"
        },
        timestamps: true
    });


    return User;

};

module.exports = UserModel;