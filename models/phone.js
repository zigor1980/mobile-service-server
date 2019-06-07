const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define('Phone', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        model_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        client_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        tariff_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        number: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        balans: {
            type: DataTypes.INTEGER,
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
        tableName: 'phone',
        modelName: 'phone',
        timestamps: true,
    });

    Phone.associate = (models) => {
        Phone.belongsTo(
            models.Tariff,
            { foreignKey: 'tariff_id', sourceKey: 'id' },
        );
        Phone.belongsTo(
            models.Model,
            { foreignKey: 'model_id', sourceKey: 'id' },
        );
        Phone.belongsTo(
            models.Client,
            { foreignKey: 'client_id', sourceKey: 'id' },
        );
        Phone.hasMany(
            models.Pay,
            { foreignKey: 'phone_id', sourceKey: 'id' },
        );
    };

    Phone.beforeCreate(instance => instance.id = uuid());

    return Phone;
};
