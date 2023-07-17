const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    result_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "result_id"
    },
    polling_unit_uniqueid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "polling_unit_uniqueid"
    },
    party_abbreviation: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "party_abbreviation"
    },
    party_score: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "party_score"
    },
    entered_by_user: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "entered_by_user"
    },
    date_entered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_entered"
    },
    user_ip_address: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_ip_address"
    }
  };
  const options = {
    tableName: "announced_pu_results",
    comment: "",
    indexes: []
  };
  const AnnouncedPuResultsModel = sequelize.define("announced_pu_results_model", attributes, options);
  return AnnouncedPuResultsModel;
};