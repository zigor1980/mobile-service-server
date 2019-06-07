const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Tariff = sequelize.define('Tariff', {
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
        tableName: 'tariff',
        modelName: 'tariff',
        timestamps: true,
    });

    Tariff.associate = (models) => {
        Tariff.hasMany(models.Phone,{ foreignKey: 'tariff_id', sourceKey: 'id'})
        Tariff.belongsToMany(
            models.Service,
            { through: models.TariffService, foreignKey: 'tariff_id' },
        );
    };

    Tariff.beforeCreate(instance => instance.id = uuid());

    return Tariff;
};
