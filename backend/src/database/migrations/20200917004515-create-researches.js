module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Researches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      researchedProfile: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mainFeeling: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      userId: {
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
    return queryInterface.dropTable('Researches');
  }
};