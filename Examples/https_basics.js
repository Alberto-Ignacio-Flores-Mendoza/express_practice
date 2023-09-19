//express

const http = require('http')

//create server requires a call back thats activated everytime 
//the user hits our server
//takes two arguments
//user requests and server response

const server = http.createServer((req,res)=>{

console.log('user hit the serve')
//res.end always used
//its a method that signals to the server that all of the response headers
//and body have been sent. that Server should consider this message complete
//MUST be calles on each esponse
res.end('home page')
})

//ports are comunication end points
server.listen(5000)


