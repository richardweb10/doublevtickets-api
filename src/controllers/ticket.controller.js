let _ticketService = null;
class TicketController {
  constructor({ TicketService }) {
    _ticketService = TicketService;
  }

  async get(req, res) {
    const { ticketId } = req.params;
    const ticket = await _ticketService.get(ticketId);
    return res.send(ticket);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const tickets = await _ticketService.getAll(pageSize, pageNum);
    return res.send(tickets);
  }
  
  async delete(req, res) {
    const { ticketId } = req.params;
    const deletedTicket = await _ticketService.delete(ticketId);
    return res.send(deletedTicket);
  }

  async update(req, res) {
    const { ticketId } = req.params;
    const ticket = await _ticketService.update(ticketId, req.body);
    return res.send(ticket);
  }

  async create(req, res) {
    const ticket = await _ticketService.create(req.body);
    return res.send(ticket);
  }

}

module.exports = TicketController;
