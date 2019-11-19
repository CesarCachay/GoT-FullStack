import React from "react";
import { getAllCharacters, getOneCharacter } from "../services/charsApi";

const limit = 10;
const offset = 0;
const id = 5;

const Home = () => {
  const [characters, setCharacters] = React.useState([]);

  const handleFetchAll = async () => {
    const response = await getAllCharacters(limit, offset);
    console.log(response.data);
  };

  const handleFetchOne = async () => {
    const response = await getOneCharacter(id);
    console.log(response.data);
  };

  return (
    <div>
      <h3>Hello from home</h3>
      <button onClick={handleFetchAll}>Get Chars!</button>
      <button onClick={handleFetchOne}>Get one</button>
    </div>
  );
};

export default Home;
