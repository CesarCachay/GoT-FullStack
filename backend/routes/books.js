const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const myBooks = await Book.find({});
    res.json(myBooks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const { name, pages } = req.body;

  try {
    let newBook = new Book({
      name: name,
      pages: pages
    });

    const book = await newBook.save();
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
