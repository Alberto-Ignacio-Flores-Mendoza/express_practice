//middle ware
//functions that execute during the request to the server
//each one has access to request and response objects
//functionality: sky is the limit
//its everywhere in express
// most apps are just middle ware
//heart and soul of express
//get better with practice

const express= require('express')
const app = express()
//importing a middleware function
const logger = require('./Examples/logger')
//request => middleware => response

//middle ware goes in the middle


//if we have multiple routes, adding middle ware becomes troublesome
// a soultion for this is app.use
//now we dont have to add our middle ware reference to every route
//order matters here
//app.use must be invoked before everything

app.use(logger)

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

app.get('/api/items', (req,res)=>{
    res.send('Items')
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})