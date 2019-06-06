const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
      'tariffService',
      {
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
          service_id: {
              type: Sequelize.UUID,
              allowNull: false,
              references: {
                  model: 'service',
                  key: 'id',
              },
              onUpdate: 'cascade',
              onDelete: 'cascade',
          },
      },
      {
          schema: 'public',
      },
  ),

  down: queryInterface => queryInterface.dropTable('tariffService'),
};

