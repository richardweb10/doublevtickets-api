const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

//const swaggerUI = require("swagger-ui-express");
//const { SWAGGER_PATH } = require("../config");
//const swaggerDocument = require(SWAGGER_PATH);

module.exports = function ({
  TicketRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  
  apiRoutes
    .use(express.json({limit: '50mb', extended: true}))
    .use(express.urlencoded({ extended: false }))
    .use(helmet())
    .use(cors())
    .use(compression());
    

  apiRoutes.use("/ticket", TicketRoutes);

  router.use("/v1/api", apiRoutes);

  //router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);



  return router;
};
