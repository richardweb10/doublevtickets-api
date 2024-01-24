const { Router } = require("express");
const {
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function({ TicketController }) {
  const router = Router();
  router.get("/",ParseIntMiddleware, TicketController.getAll);
  router.get("/:ticketId",[], TicketController.get);
  router.post("/",[], TicketController.create);
  router.patch("/:ticketId",[], TicketController.update);
  router.delete("/:ticketId",[], TicketController.delete);

  return router;
};
