module.exports = (sequelize, DataTypes) => {
  const Params = sequelize.define("Params", {
    parameter: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  return Params;
};
