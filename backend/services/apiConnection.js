const fetch = require("node-fetch");

const GOT_API_URL = process.env.GOT_API_URL || "https://api.got.show/api";

const getAllCharacters = async () => {
  const response = await fetch(`${GOT_API_URL}/general/characters`);
  const results = await response.json();
  return results.show;
};

const loadCharacters = async () => {
  console.log("Fetching data from API GoT ...");
  const data = await getAllCharacters();
  console.log("Characters loaded!");
  return data;
};

module.exports = { loadCharacters };
