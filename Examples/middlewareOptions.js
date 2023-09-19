//middle ware
//functions that execute during the request to the server
//each one has access to request and response objects
//functionality: sky is the limit
//its everywhere in express
// most apps are just middle ware
//heart and soul of express
//get better with practice
//we can install 3rd party middleware
//we can instal it with npm

const express= require('express')
const app = express()
const morgan = require('morgan')
//importing a middleware function
const logger = require('./Examples/logger')
const authorize = require('./Examples/authorize')

//request => middleware => response

//middle ware goes in the middle


//if we have multiple routes, adding middle ware becomes troublesome
// a soultion for this is app.use
//now we dont have to add our middle ware reference to every route
//order matters here
//app.use must be invoked before everything

//multiple middleware
//they will be executed in order
app.use([logger, authorize])
//tells me how long local host took to responde
app.use(morgan('tiny'))

//we can also selectivly aply this to a specific route
//------app.use('/api' , logger)
//it will be applied to anything that starts with /api

app.get('/', (req,res)=>{

    res.send('Home')

})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

//if we want to add more than one middleware directly to a 
// route we have to enclose it in paranthesis

app.get('/api/items',[logger, authorize] ,(req,res)=>{
    res.send('Items')
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})