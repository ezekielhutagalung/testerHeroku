const express = require("express")
const getYears = require('./helpers/helper')
const app = express()
const routes = require('./router/index.js')
const port = process.env.PORT || 4000;


app.locals.getYears = getYears

app.set('view engine', 'ejs')


app.use(express.urlencoded({extended : false}))

app.use('/', routes)

app.use(express.static(__dirname + './public'))


app.listen(port, function(){
    console.log(`this app is listeng on ${port}`)
})
