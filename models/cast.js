'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     getFullName(){
       return `${this.first_name} ${this.last_name}`
     }

    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movie, { 
        through : models.MovieCast,
          foreignKey : "CastId" }
        );
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    phone_number: DataTypes.STRING, 
    gender: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: (instance,option)=>{
        if(!instance.last_name){
          instance.last_name = instance.first_name
        }
      }
    },
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};