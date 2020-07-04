import React, { useContext, useEffect } from "react";
import BrkContext from "../context/brkContext";
import CharacterCard from "./CharacterCard";

const CharacterListAll = () => {
  const { loading, characters, getCharacters } = useContext(BrkContext);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>breaking Bad Cast</h1>
        <div className="grid-list">
          {loading ? (
            <div>loading...</div>
          ) : (
            characters.map((character) => (
              <CharacterCard key={character.char_id} character={character} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterListAll;
