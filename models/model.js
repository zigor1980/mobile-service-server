const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('Model', {
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
        tableName: 'model',
        modelName: 'model',
        timestamps: true,
    });

    Model.associate = (models) => {
        Model.hasMany(
            models.Phone,
            { foreignKey: 'model_id', sourceKey: 'id' },
        );
    };

    Model.beforeCreate(instance => instance.id = uuid());

    return Model;
};
