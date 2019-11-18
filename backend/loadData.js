(async function() {
  const loadData = require("./services/apiConnection");
  const characters = await loadData.loadCharacters();
  console.log(characters);
})();
