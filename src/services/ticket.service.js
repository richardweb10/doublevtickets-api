const BaseService = require("./base.service");
let _ticketRepository = null;

class TicketeService extends BaseService {
    constructor({ TicketRepository }) {
        super(TicketRepository);
        _ticketRepository = TicketRepository;
    }

}

module.exports = TicketeService;
