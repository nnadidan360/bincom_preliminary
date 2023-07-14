const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    name_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "name_id"
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "firstname"
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lastname"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    phone: {
      type: DataTypes.CHAR(13),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone"
    },
    pollingunit_uniqueid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pollingunit_uniqueid"
    }
  };
  const options = {
    tableName: "agentname",
    comment: "",
    indexes: []
  };
  const AgentnameModel = sequelize.define("agentname_model", attributes, options);
  return AgentnameModel;
};