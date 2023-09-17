//put method

const express = require('express')
const app = express();

//setting up the router
const people = require('./routes/people')
const auth = require('./routes/auth')

//Get read data
//post insert data add data to server


//static assets
app.use(express.static('./methods-public'))

//parse form data
//with a built in middle ware function
//parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())


app.use('/api/people', people)
app.use('/login', auth)

//alot of these paths are the sam, wouldnt it be nice if we could group them all together
// we could put these in a different file in a seperate folder




app.listen(5000,()=>{
    console.log("Server is listening on port  5000")
})

