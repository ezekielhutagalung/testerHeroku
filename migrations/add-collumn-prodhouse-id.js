module.exports = {
    up:  (queryInterface, Sequelize) => {
     return queryInterface.addColumn('Movies','ProductionHouseId',{
       type: Sequelize.INTEGER,
       references:{
         model:{tableName: 'ProductionHouses'},
         key: 'id'
       },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE'
     }
  
   )
  
    },
  
    down:  (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Movies','ProductionHouseId')
    }
  };