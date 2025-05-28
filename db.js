const mongoose = require("mongoose");

const url =
  "mongodb+srv://01236913:Password@cluster0.zawwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
