const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
      'phone',
      {
          id: {
              type: Sequelize.UUID,
              allowNull: false,
              primaryKey: true,
              defaultValue: uuid()
          },
          tariff_id: {
              type: Sequelize.UUID,
              allowNull: false,
              references: {
                  model: 'tariff',
                  key: 'id',
              },
              onUpdate: 'cascade',
              onDelete: 'cascade',
          },
          model_id: {
              type: Sequelize.UUID,
              allowNull: false,
              references: {
                  model: 'model',
                  key: 'id',
              },
              onUpdate: 'cascade',
              onDelete: 'cascade',
          },
          client_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: 'client',
                key: 'id',
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
          },
          description: {
              type: Sequelize.STRING(40),
              allowNull: false,
          },
          number: {
              type: Sequelize.STRING(40),
              allowNull: false,
          },
          balans: {
              type: Sequelize.INTEGER,
              allowNull: false,   
          },
          createdAt: {
              type: Sequelize.DATE,
              allowNull: true,
          },
          updatedAt: {
              type: Sequelize.DATE,
              allowNull: true,
          },
      },
      {
          schema: 'public',
      },
  ),

  down: queryInterface => queryInterface.dropTable('phone'),
};
