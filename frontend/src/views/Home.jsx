import React from "react";
import { getAllCharacters, getOneCharacter } from "../services/charsApi";
import CharacterList from "../components/CharacterList";

const limit = 10;
const offset = 0;
const id = "5dd80dc09242871559e18932";

const Home = () => {
  const [characters, setCharacters] = React.useState([]);

  const handleFetchAll = async () => {
    const response = await getAllCharacters(limit, offset);
    console.log(response.data);
    setCharacters(response.data);
  };

  const handleFetchOne = async () => {
    const response = await getOneCharacter(id);
    // console.log(response.data);
    setCharacters(response.data);
  };

  console.log(characters);
  return (
    <div>
      <h3>Hello from home</h3>
      <button onClick={handleFetchAll}>Get Chars!</button>
      <button onClick={handleFetchOne}>Get one</button>
      <div>
        {characters.length > 0 &&
          characters.map(character => (
            <h1 key={character._id}>{character.name}</h1>
          ))}
      </div>
    </div>
  );
};

export default Home;
