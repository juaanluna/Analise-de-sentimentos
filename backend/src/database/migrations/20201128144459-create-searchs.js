module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Searchs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      searchName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      principalWord: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      positives: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      negatives: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Searchs');
  }
};