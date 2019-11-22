const express = require("express");
const router = express.Router();

const Character = require("../models/Character");

// @route     GET api/characters
// desc       Get all characters
// @access    Public route

const PAGE_SIZE = 10;

router.get("/", async (req, res) => {
  try {
    const page = req.query.page;

    const myChars = await Character.find({})
      .limit(PAGE_SIZE)
      .skip((page - 1) * PAGE_SIZE);

    const charactersCount = await Character.count();

    res.json({
      items: myChars,
      pageInfo: {
        current: page,
        totalPages: Math.ceil(charactersCount / PAGE_SIZE)
      }
    });
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
