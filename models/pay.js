const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Pay = sequelize.define('Pay', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        phone_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        underscore: true,
        tableName: 'pay',
        modelName: 'pay',
        timestamps: false,
    });

    Pay.associate = (models) => {
        Pay.hasMany(models.Phone, {
            foreignKey: 'phone_id', sourceKey: 'id',
        });
    };

    Pay.beforeCreate(instance => instance.id = uuid());

    return Pay;
};
