const express = require('express')
const app = express()
const path = require('path')

//unlike in basic node, we can import our logic and styles with this line
//setting up our static assets in this one folder
//static and middleware
//static assets go in public folder
app.use(express.static('./public'))

//listen for all the get requests that come in searching for the home page
app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.all('*', (req,res)=>{
res.status(404).send('Resource not found')
})

app.listen(5000, (req,res)=>{
    console.log('server is listening on port 5000')
})
