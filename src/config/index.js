const environment = process.env.NODE_ENV || 'local';
//console.log("environment: ", environment);
require("dotenv").config({ path: `./.enviroment/.${environment}.env`});

const config ={
    "PORT": process.env.PORT,
    "MONGO_URI": process.env.MONGO_URI,
}
module.exports = config;