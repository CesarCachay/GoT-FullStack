const express = require("express");
const router = express.Router();

// @route     GET api/characters
// desc       Get all characters
// @access    Public route
router.get("/", (req, res) => {
  res.send("Get all characters from API");
});

// @route     GET api/characters/:id
// desc       Get an specific characters findById
// @access    Public route
router.get("/:id", (req, res) => {
  res.send("Get an specific character");
});

module.exports = router;
