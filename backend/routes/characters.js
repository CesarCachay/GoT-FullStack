const express = require("express");
const router = express.Router();

const Character = require("../models/Character");

// @route     GET api/characters
// desc       Get all characters
// @access    Public route
router.get("/", async (req, res) => {
  try {
    const myChars = await Character.find({});

    res.json(myChars);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route     GET api/characters/:id
// desc       Get an specific characters findById
// @access    Public route
router.get("/:id", async (req, res) => {
  try {
    const specificChar = await Character.findById(req.params.id);

    if (!specificChar) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.json(specificChar);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
