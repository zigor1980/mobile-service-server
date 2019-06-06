const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        desc: {
            type: DataTypes.STRING(255),
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
        tableName: 'service',
        modelName: 'service',
        timestamps: true,
    });

    Service.associate = (models) => {
        Service.belongsToMany(
            models.Tariff,
            { through: models.TariffService, foreignKey: 'service_id' },
        );
    };

    Service.beforeCreate(instance => {
        console.log(uuid());
        console.log(instance);
        instance.id = uuid();
        return instance;
    });

    return Service;
};
