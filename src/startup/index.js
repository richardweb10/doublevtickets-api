const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express();
    _express.use(router);  
    _express.disable('x-powered-by');  
   
  }

  start() {
    return new Promise((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(' API running on port ' + _config.PORT);

        resolve();
      });
    });
  }
}

module.exports = Server;
