const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
      'pay',
      {
          id: {
              type: Sequelize.UUID,
              allowNull: false,
              primaryKey: true,
              defaultValue: uuid()
          },
          phone_id: {
              type: Sequelize.UUID,
              allowNull: false,
              references: {
                  model: 'phone',
                  key: 'id',
              },
              onUpdate: 'cascade',
              onDelete: 'cascade',
          },
          cost: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
      },
      {
          schema: 'public',
      },
  ),

  down: queryInterface => queryInterface.dropTable('pay'),
};
