const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    state_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "state_id"
    },
    state_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "state_name"
    }
  };
  const options = {
    tableName: "states",
    comment: "",
    indexes: []
  };
  const StatesModel = sequelize.define("states_model", attributes, options);
  return StatesModel;
};