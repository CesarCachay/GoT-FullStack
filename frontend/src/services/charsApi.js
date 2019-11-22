import axios from "axios";
// const CHARS_API_URL =
//   process.env.REACT_APP_CHARS_API_URL || "http://localhost:5000/api/characters";

const CHARS_API_URL =
  process.env.REACT_APP_CHARS_API_URL || "http://localhost:5000/api";

export const getAllCharacters = async (limit = 10, offset = 0) => {
  // const response = await fetch(
  //   `${CHARS_API_URL}?limit=${limit}&offset=${offset}`
  // );
  // const results = await response.json();
  // console.log(results);
  // return response;

  return await axios.get(
    `${CHARS_API_URL}/characters?limit=${limit}&offset=${offset}&page=${5}`
  );
};

export const getOneCharacter = async id => {
  // const response = await fetch(`${CHARS_API_URL}/${id}`);
  // const result = await response.json();
  // console.log(result);
  // return response;

  return await axios.get(`${CHARS_API_URL}/characters/${id}`);
};
