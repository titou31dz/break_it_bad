import React, { useContext, useEffect } from "react";
import BrkContext from "../context/brkContext";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { loading, characters, getCharacters } = useContext(BrkContext);

  useEffect(() => {
    getCharacters();
  }, []);

  const charactersMini = characters.slice(0, 9);

  return (
    <div className="grid-list">
      {loading ? (
        <div>loading...</div>
      ) : (
        charactersMini.map((character) => (
          <CharacterCard key={character.char_id} character={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
