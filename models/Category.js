const { Model, DataTypes } = require('sequelize');

//making sure your connected to the database
const sequelize = require('../config/connection.js');

class Category extends Model {}

//this is how you initialize the database
//whenever we initialize the model, we are giving it the columns for the tables itself
//but we also have these options for the models themselves. The "Sequelize" section
//that we are using sequealize as the database, timestaps are optional if we wanted
//to include it in the  table.
//freezeTableName -> prevents it from being categories, making it plural, right now its singular
//underscored -> if you have multiple words in a name it includes the underscores

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
