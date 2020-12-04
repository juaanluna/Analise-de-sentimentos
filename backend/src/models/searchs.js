module.exports = (sequelize, DataTypes) => {
    
  const Searchs = sequelize.define("Searchs", {
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
  });

  return Searchs;
};
