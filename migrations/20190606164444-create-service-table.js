const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
      'service',
      {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: uuid()
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        desc: {
            type: Sequelize.STRING(255),
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

  down: queryInterface => queryInterface.dropTable('service'),
};
