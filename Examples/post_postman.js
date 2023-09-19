const express = require('express')
const app = express();
//Get read data
//post insert data add data to server
let {people} =require('./data')


//static assets
app.use(express.static('./methods-public'))

//parse form data
//with a built in middle ware function
//parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

//these paths have to match our frontend
app.get('/api/people', (req,res)=>{
    res.status(200).json({success: true, data: people})
})


app.post('/api/people', (req,res)=>{
    const {name} = req.body

    if(!name){
        return res.status(400).json({success:false, msg: 'please provide name value'})
    }
    res.status(201).json({sucess: true, person: name})
})

app.post('/login', (req,res)=>{
    const {name}= req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }


    res.status(401).send('Please provide credentials')
})


app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide a name value'})
    }
    res.status(201).send({ success: true, data: [...people, name]
    })
})


app.listen(5000,()=>{
    console.log("Server is listening on port  5000")
})