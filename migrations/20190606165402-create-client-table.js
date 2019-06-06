const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
      'client',
      {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: uuid()
        },
        name: {
            type: Sequelize.STRING(40),
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING(40),
            allowNull: false,
        },
        passport: {
            type: Sequelize.STRING(40),
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

  down: queryInterface => queryInterface.dropTable('client'),
};
