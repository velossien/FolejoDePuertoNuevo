// sets our environment -if we are on production or testing - the first option will be set and if not will be in development
let env = process.env.NODE_ENV || "development";
console.log("Environment: ", env);

if(env === "development" || env==="test"){
    let config = require("./config.json"); //by requiring a json - will automatically parse it into a javascript object
    let envConfig = config[env]; //when you want to use a variable to access a property- need to use bracket notation

    Object.keys(envConfig).forEach((key)=>{//takes an obj, gets all the keys and returns them as an array
        process.env[key] = envConfig[key];
    }); 

};