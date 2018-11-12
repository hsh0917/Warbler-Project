const mongoose = require("mongoose");
mongoose.set("debug", true); // it makes us to see the actual Mongo queries that are being run in the terminal.
mongoose.Promise = Promise;
mongoose.connect(
  "mongodb://localhost/warbler",
  {
    keepAlive: true
  }
);

module.exports.User = require("./user");
module.exports.Message = require("./message")