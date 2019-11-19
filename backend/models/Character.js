const mongoose = require("mongoose");

const CharacterSchema = mongoose.Schema({
  id: {
    type: String
    // required: true
  },
  name: {
    type: String
    // required: true
  },
  image: {
    type: String
  },
  gender: {
    type: String
    // required: true
  },
  slug: {
    type: String
    // required: true
  },
  rank: {
    type: String
    // required: true
  },
  house: {
    type: String
    // required: true
  },
  book: {
    type: String
    // required: true
  },
  title: {
    type: String
    // required: true
  }
});

module.exports = mongoose.model("character", CharacterSchema);
