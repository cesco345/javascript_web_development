const EventEmitter = require("events");

var url = "http://google.com/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}
//  Raise an event

module.exports = Logger;
