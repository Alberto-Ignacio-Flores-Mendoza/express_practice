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


module.exports = logger