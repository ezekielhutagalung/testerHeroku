'use strict';

const { sequelize } = require("../models");

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('MovieCasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MovieId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Movies'
          },
          key : 'id'
        },
        onUPDATE : 'CASCADE',
        onDELETE: 'CASCADE'
      },
      CastId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Casts'
          },
          key : 'id'
        },
        onUPDATE : 'CASCADE',
        onDELETE: 'CASCADE'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MovieCasts');
  }
};