const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{

    const url = req.url
    if(url==='/'){

        //this still has to be text-html 
        res.writeHead(200, {'content-type': 'text-html'})
        res.write(homePage)
        //were not limited to only sending html code 
        //we could do something with require
        //we would still be passing in the content of a file
    
        res.end()
    }
    else if(url === '/about.html'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/js'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text-html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)