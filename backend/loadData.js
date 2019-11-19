const connectDB = require("./config/db");
const Character = require("./models/Character");
const loadData = require("./services/apiConnection");

// Connect DB with the script to save the characters in the collection
connectDB();

(async function() {
  try {
    const characters = await loadData.loadCharacters();
    characters.forEach(character => {
      const { name, image, gender, house } = character;

      let newCharacter = new Character({
        name,
        image,
        gender,
        house
      });

      newCharacter.save();

      setTimeout(() => {
        console.log("Database populated successfully");
        process.exit();
      }, 5000);
    });
  } catch (error) {
    console.error(error.message);
    console.log("Server Error");
  }
})();
