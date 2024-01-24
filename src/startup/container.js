const {
  createContainer,
  asClass,
  asValue,
  asFunction,
} = require("awilix");
//  config
const config = require("../config");
const app = require(".");
// services
const {
  TicketService,
} = require("../services");
// controllers
const {
  TicketController,
} = require("../controllers");
// routes
const {
  TicketRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");
//models
const {
  Ticket,
} = require("../models");

// repositories
const {
  TicketRepository,
} = require("../repositories");
// passport
//const Passport = require('passport');

const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    TicketService: asClass(TicketService).singleton(),
  })
  .register({
    TicketController: asClass(TicketController.bind(TicketController)).singleton(),
  })
  .register({
    TicketRoutes: asFunction(TicketRoutes).singleton(),
  })
  .register({
    Ticket: asValue(Ticket)
  })
  .register({
    TicketRepository: asClass(TicketRepository).singleton(),
  });


module.exports = container;
