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
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    negatives: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  return Searchs;
};
