import React, { useContext, useEffect } from "react";
import BrkContext from "../context/brkContext";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const { loading, charactersMin, getCharacters } = useContext(BrkContext);

  useEffect(() => {
    getCharacters();
  }, []);

  // const charactersMini = characters.slice(0, 9);

  return (
    <div className="container">
      <div className="grid-list">
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            {charactersMin.map((character) => (
              <CharacterCard key={character.char_id} character={character} />
            ))}
          </>
        )}
      </div>
      {!loading && (
        <div className="show-all">
          <Link to="/all_characters">show all</Link>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
