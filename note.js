//To build APIs which are responsive, efficient, and lightweight, 
// using NodeJS with Express would be the best choice.

//Node runs on a server, not the backend
//The console is the terminal window
//gloval object instead of a window object7


//Common core modules, file system, httm modules
//We use common js modures instead of Es6 modules
//some common cores are
//path, os, fs, http

// We use const os =require('os') instead of normal imorts
// each one of these have there own functions

//console.log os.type , version , etc

// we also have access to a bunch of different values in node such as
// __dirname, __filename

//We can create our own modules
// build a function in another file and import it into your main file with require
// export from the main file with module.exports
//since they arent common core filesm use ./ when importing
//require('./math')

//module.export = {names of whatever your exporting}

// we can destructure thes items right away in our main file
// or we can just call them all together
// if we destructure just use the name given 
// if not use conse math =require('math)
// math.add()





//Node js is missing some js apis like fetch


//if we want to read files use require('fs')
// after use fs.readFile('path',encoding, callback function )

//sometimes there are problems hardcoding paths
// its better to use a const path = require('path')
//path.join(__dirname, 'files', 'starter.txt')
//although you can get away without it

//if we want to force events to occur in a series we can place them inside
//the call back its supposed to happen after
//this would make a callback hell though

//we can use async await to avoid it

