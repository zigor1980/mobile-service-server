const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        passport: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        underscore: true,
        tableName: 'client',
        modelName: 'client',
        timestamps: true,
    });

    Client.associate = (models) => {
        Client.hasMany(
            models.Phone,
            { foreignKey: 'client_id', sourceKey: 'id' },
        );
    };

    Client.beforeCreate(instance => instance.id = uuid());

    return Client;
};
