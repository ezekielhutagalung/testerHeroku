const{Movie,ProductionHouse,MovieCast,Cast} = require('../models')

class MovieController{
    static showData(req,res){
        // res.send("haii")
        Movie.findAll(
            {
                include: ProductionHouse,
                order : [['released_year','DESC' ]],
             
            }
        )
        .then(data=>{
            //console.log(data)
           res.render('movies',{data})
        })
        .catch(err=>{
            res.send(err.message)
        })


    }

    static showFormAdd(req,res){
        res.render('addMovie')
        
    }

    static addMovie(req,res){
      const newMovie = {
          name : req.body.name,
          released_year : req.body.released_year,
          genre : req.body.genre,
          Rating: req.body.Rating
      }
        Movie.create(newMovie)

         .then(data=>{
             
             res.redirect('/movies')
         })
         .catch(err=>{
             res.send(err.message)
         })

    }

    static showFormEdit(req,res){
        let id = +req.params.id
        let prodHouse = []

        ProductionHouse.findAll()
           .then(data=>{
               prodHouse = data
               //console.log(prodHouse)
              return Movie.findByPk(id)
           })
           .then(movies=>{
               res.render('editMovie',{movies,prodHouse})
           })
           .catch(err=>{
               res.send(err.message)
           })

    }

    static editMovie(req, res){
        let id = +req.params.id
        let obj = {
            name : req.body.name,
            released_year : req.body.released_year,
            genre : req.body.genre,
            ProductionHouseId : req.body.ProductionHouseId,
            Rating: req.body.Rating
        }
        let condition = {
            where :{
                id:id
            }
        }

        Movie.update(obj,condition)
         .then(data=>{
             res.redirect('/movies')
         })
         .catch(err=>{
             res.send(err)
         })


    }

    
    static showFormAddCast(req,res){
          let id = req.params.id
          let movie;
          let casts;
         
          //console.log(MovieCast)
          Movie.findByPk(id,{
              include : [{model:Cast, through:{attributes: ['role']} }]
          })
          .then(data=>{
              movie = data
              //console.log(movie.Casts[0].dataValues)
             return Cast.findAll()
          })
          .then(data=>{
              casts = data
               
              
              res.render('addmoviecast',{movie,casts})
          })
          .catch(err =>{
              res.send(err.message)
          })
    }


    static AddCast(req,res){
        let val = {
            MovieId : +req.params.id,
            CastId : +req.body.CastId,
            role: req.body.role
        }

        MovieCast.create(val)
        .then(data=>{
            //console.log(data)
            res.redirect('/movies')
        })
        .catch(err=>{
            res.send(err.message)
        })
    }

    static deleteMovie(req,res){
         const id = +req.params.id

         Movie.destroy({where :{id}})

         .then(data=>{
             res.redirect('/movies')
         })
         .catch(err=>{
             res.send(err.message)
         })

    }

}

module.exports= MovieController