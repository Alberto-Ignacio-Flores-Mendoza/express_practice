const express = require('express')
const app = express()

//what resource the user wants to access and the callback 
//will be invoked everytime the user tries to request our resource
app.get('/', (req,res)=>{
    res.status(200).send('Home page')
})


app.get('/about', (req,res)=>{
    res.status(200).send('About page')
})

//default method handles all http verb
// if we didnt find the resource we will send this back
app.all('*', (req,res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})

