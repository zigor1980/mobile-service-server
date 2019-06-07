module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
      queryInterface.addColumn(
          'pay',
          'updatedAt',
          {
              type: Sequelize.DATE,
              allowNull: true,
              defaultValue: Sequelize.literal('NOW()'),
          },
      ),
      queryInterface.addColumn(
          'pay',
          'createdAt',
          {
              type: Sequelize.DATE,
              allowNull: true,
              defaultValue: Sequelize.literal('NOW()'),
          },
      ),
  ]),

  down: queryInterface => Promise.all([
      queryInterface.removeColumn(
          'pay',
          'updatedAt',
      ),
      queryInterface.removeColumn(
          'pay',
          'createdAt',
      ),
  ]),
};
