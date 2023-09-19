const http = require('http')

const server = http.createServer((req,res)=>{
    //Were providing metadata about our response
    //status code and headers
    // in the header we specify what type of content were sending back

    //if we were to replace html for plain our html code would be treated as plain text
    //express can take care of this if we dont want to 


    //we have to make sure this status code is correct depending on what is happening with the request
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>home page</h1>')

    //tells us what method the user is trying to use
    console.log(req.method)

    //tells us what url the user is trying to access
    //if it isnt there we should return and error code
    //we can use an if statement for that
    
    console.log(req.url)

    res.end(); 
})

server.listen(5000)