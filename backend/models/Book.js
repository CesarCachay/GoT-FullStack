const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  name: {
    type: String
  },
  pages: {
    type: String
  }
});

module.exports = mongoose.model("book", BookSchema);
