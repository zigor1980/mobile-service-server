const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const TariffService = sequelize.define('TariffService', {
        tariff_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        service_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    }, {
        underscore: true,
        tableName: 'tariffService',
        modelName: 'tariffService',
        timestamps: false,
    });

    TariffService.associate = (models) => {
        TariffService.belongsTo(
            models.Tariff,
            { foreignKey: 'service_id', sourceKey: 'id' },
        );
        TariffService.belongsTo(
            models.Service,
            { foreignKey: 'tariff_id', sourceKey: 'id' },
        );
    };

    return TariffService;
};
