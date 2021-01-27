const{ProductionHouse} = require('../models')

class ProdHouseController{
      static showProductionHouse(req,res){
      
        ProductionHouse.findAll(
          { order : [['name_prodHouse', 'ASC']]}
        )
        .then(data=>{
            res.render("productionhouse.ejs", {data})
        })
        .catch(err=>{
            res.send(err)
        })
      }

}


module.exports = ProdHouseController
