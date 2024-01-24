const { Types } = require("mongoose");
const BaseRepository = require("./base.repository");
let _ticket = null;

class TicketRepository extends BaseRepository {
  constructor({ Ticket  }) {
    super(Ticket);
    _ticket = Ticket;
  }


}

module.exports = TicketRepository;
