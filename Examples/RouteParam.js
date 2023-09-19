// api vs ssr serverside rendering
//in  express api, its an http interface to interact with our data
//data is sent using json 
//to send our response we use res.json()

// ssr we have to set up templates 
// we do this with res.render() 

//our sever provides data
//it must provide this data to our users

const express = require('express')
const app = express();
const {products} = require('./data')


app.get('/', (req,res)=>{
    //res.json(products)
    //sends a json response 
     // this method sends a response that is the paramter converted to a JSON string 

     res.send('<h1>Home page</h1> <a href="/api/products">products</a>')
})


//we can be selective on what we want to send back 
//here were only sending back id, name, image
app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id,name,image}
    })
    res.json(newProducts);
})

//this isnt good if i have way to many products
// a good solution is route parameter
/* app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product)=> product.id === 1)
    res.json(singleProduct)
})
 */


//route paramter
//productID can be anything

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params) // we can se whatever is being requested here
    // we can destructure it from the params and use it like that
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    
    res.json(singleProduct)
})



app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})