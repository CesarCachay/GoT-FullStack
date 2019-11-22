const connectDB = require("./config/db");
const Character = require("./models/Character");
const loadData = require("./services/apiConnection");

// Connect DB with the script to save the characters in the collection
connectDB();

(async function() {
  try {
    const characters = await loadData.loadCharacters();
    await Promise.all(
      characters.map(async character => {
        const { name, image, gender, house } = character;

        let newCharacter = new Character({
          name,
          image,
          gender,
          house
        });

        await newCharacter.save();
      })
    );

    console.log("Database populated successfully");
    process.exit();
  } catch (error) {
    console.error(error.message);
    console.log("Server Error");
  }
})();
