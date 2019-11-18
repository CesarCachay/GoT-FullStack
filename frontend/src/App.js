import React from "react";

function App() {
  const [characters, setCharacters] = React.useState([]);

  const handleFetch = async () => {
    const response = await fetch("https://api.got.show/api/general/characters");
    const results = await response.json();
    setCharacters(results.show);
    console.log(results);
  };

  return (
    <div className="App">
      <h3>Frontend</h3>
      <button onClick={handleFetch}>Get Info</button>

      <div>
        {characters.length > 0 &&
          characters.map((char, index) => (
            <div key={index}>
              <h5>{char.name}</h5>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
