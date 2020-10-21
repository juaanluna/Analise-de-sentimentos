module.exports = (sequelize, DataTypes) => {
    
  const Research = sequelize.define("Researches", {
    researchedProfile: DataTypes.STRING,
    mainFeeling: DataTypes.STRING,
  });

  return Research;
};
