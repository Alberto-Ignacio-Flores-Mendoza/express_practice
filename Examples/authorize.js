const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user==='john'){
        req.user = {name: 'john', id:3}
        //we still have to call next here
        next()
    }
    else{
        res.status(401).send('unauthorized')
    }

}
//this is just a demonstration
//this isnt how we would do it
//we can test this with
//http://localhost:5000/?user=john
module.exports = authorize;