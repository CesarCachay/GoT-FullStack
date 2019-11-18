const express = require("express");
const router = express.Router();

const Character = require("../models/Character");

// @route     GET api/characters
// desc       Get all characters
// @access    Public route
router.get("/", (req, res) => {
  try {
    res.send("Get all characters from API");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     GET api/characters/:id
// desc       Get an specific characters findById
// @access    Public route
router.get("/:id", (req, res) => {
  try {
    res.send("Get an specific character");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
