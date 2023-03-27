const express = require('express');
const app = express();

class Event {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
  }

  live_stream() {
    console.log(`Live streaming ${this.name} on ${this.date}`);
  }

  to_dict() {
    return {
      "name": this.name,
      "description": this.description,
      "date": this.date
    };
  }
}

const events = [
  new Event("Art Exhibition",
    "Experience the beauty of modern art at our gallery", "2023-04-15"),
  new Event("Art Sale", "Buy stunning artworks at great prices", "2023-05-01"),
  new Event("Artist Talk", "Join us for a talk with renowned artist John Doe", "2023-06-15"),
  new Event("Art Workshop", "Learn new art techniques and skills with our experienced instructors", "2023-07-01"),
  new Event("Art Auction",
    "Bid on exclusive artworks and support local artists", "2023-08-15")
];

app.get('/events/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < events.length) {
    res.json(events[index].to_dict());
  } else {
    res.status(404).send("Event not found");
  }
});

class Ticket {
  constructor(event, price) {
    this.event = event;
    this.price = price;
    this.ticket_id = 1000;
  }

  display() {
    return {"Ticket ID": this.ticket_id, "Event": this.event.name, "Price": this.price};
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
  const ticket = tickets[index];
  res.json(ticket.display());
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
