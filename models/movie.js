'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Cast, { 
        through : models.MovieCast,
          foreignKey : "MovieId" }
        );
    
      Movie.belongsTo(models.ProductionHouse);
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year: {
      type: DataTypes.INTEGER,
    validate:{
      cektahun(value){
        if(value % 4 === 0){
          throw new Error("Tahun ini tahun kabisat bro, Mau film lo ga laku?")
        }
      }
    }
  },
    genre: DataTypes.STRING,
    ProductionHouseId : DataTypes.INTEGER,
    Rating :DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};