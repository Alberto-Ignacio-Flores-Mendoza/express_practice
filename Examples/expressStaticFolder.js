const express = require('express')
const app = express()
const path = require('path')

//unlike in basic node, we can import our logic and styles with this line
//setting up our static assets in this one folder
//static and middleware
//we can basically call all of our resources with this
app.use(express.static('./public'))

//listen for all the get requests that come in searching for the home page
/* app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
}) */
// the index.html file could also go into static public folder

app.all('*', (req,res)=>{
res.status(404).send('Resource not found')
})

app.listen(5000, (req,res)=>{
    console.log('server is listening on port 5000')
})

