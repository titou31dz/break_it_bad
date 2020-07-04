import React, { useContext, useEffect } from "react";
import BrkContext from "../context/brkContext";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { loading, characters, getCharacters } = useContext(BrkContext);

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters[0]);

  return (
    <div className="container grid-list">
      {loading ? (
        <div>loading...</div>
      ) : (
        characters.map((character) => (
          <CharacterCard key={character.char_id} character={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
