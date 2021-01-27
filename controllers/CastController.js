const {Cast,Movie} = require('../models')

class CastController{

    static ShowData(req,res){
        //  res.send("haiii")
        Cast.findAll(
            {
            include : Movie,
            order : [['id','ASC']]
        }
            )
        .then(data=>{
            //console.log(data)
            res.render('Cast',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static ShowFormAdd(req,res){
        res.render('addcast')
        
    }

    static AddCast(req, res){
      const newCast = {
           first_name : req.body.first_name,
           last_name : req.body.last_name,
           birth_year : req.body.birth_year,
           phone_number : req.body.phone_number,
           gender : req.body.gender
       }

       Cast.create(newCast)
       .then(data=>{
           res.redirect('/casts')
       })
       .catch(err=>{
           res.send(err)
       })

        
    }

    static ShowFormEdit(req,res){
       let id = +req.params.id
       Cast.findByPk(id)
       .then(data=>{
           res.render('editCast',{data})
       })
       .catch(err=>{
           res.send(err)
       })
        
    }

    static EditCast(req, res){
        let id = +req.params.id
        let perCast = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            birth_year : req.body.birth_year,
            phone_number : req.body.phone_number,
            gender : req.body.gender
        }

        Cast.update(perCast,{where:{id}})
        .then(data=>{
            res.redirect('/casts')
        })
        .catch(err=>{
            res.send(err.message)
        })          
    }


    static SeeMovies(req,res){
          const id = +req.params.id

          Cast.findByPk(id,{include: Movie})
          .then(data=>{
              res.render("seemovies",{data})
          })
          .catch(err=>{
              res.send(err)
          })
    }

    static DeleteCast(req,res){
        const id = +req.params.id

        Cast.destroy(
            { where : {id}}
        )

        .then(data=>{
            res.redirect('/casts')
        })
        .catch(err=>{
            res.send(err.message)
        })
    }

    

}


module.exports = CastController