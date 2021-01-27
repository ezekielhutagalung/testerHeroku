'use strict';
const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */

   let data = JSON.parse(fs.readFileSync('./productionHouse.json','utf-8'))

   data = data.map(el=>{
     let tanggal = {createdAt:new Date(), updatedAt: new Date()}
     return Object.assign(el,tanggal)
   })

   return queryInterface.bulkInsert('ProductionHouses',data)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('ProductionHouses', null, {});
  }
};
