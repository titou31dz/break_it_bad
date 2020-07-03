import React, { useContext, useEffect } from "react";
import BrkContext from "../context/brkContext";

const CharacterList = () => {
  const { loading, characters, getCharacters } = useContext(BrkContext);
  useEffect(() => {
    getCharacters();
  }, []);
  console.log(characters);
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        characters.map((character) => (
          <div key={character.char_id}>{character.name}</div>
        ))
      )}
    </div>
  );
};

export default CharacterList;
