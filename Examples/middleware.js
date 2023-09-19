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

//request => middleware => response

const logger =(req,res,next)=>{ //express suplies these params ,we have to access them as params
    //we have to pass it to the next middleware
    //unless were terminating the whole cycle with a respond
    //everytime we use middleware we must either pass it to the next middle ware or terminate 

    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url,time)
    //terminating
    //res.send('testing')
    //or pass it on to the next one
    next()
}


//middle ware goes in the middle
//
app.get('/',logger, (req,res)=>{

    res.send('Home')

})

app.get('/about',logger, (req,res)=>{
    res.send('About')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})