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
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      negatives: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Searchs');
  }
};