class Ticket {
    constructor(event, price) {
      this.event = event;
      this.price = price;
      this.ticket_id = 1000;
    }
  
    display() {
      return { "Ticket ID": this.ticket_id, "Event": this.event.name, "Price": this.price };
    }
  }
  
  const tickets = [
    new Ticket(events[0], 100),
    new Ticket(events[1], 200),
    new Ticket(events[2], 250),
    new Ticket(events[3], 350),
    new Ticket(events[4], 100)
  ];
  
  app.get('/ticket/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < tickets.length) {
      const ticket = tickets[index];
      res.json(ticket.display());
    } else {
      res.status(404).send('Ticket not found');
    }
  });
  