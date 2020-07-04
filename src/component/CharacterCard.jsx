import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="card-head">
        <img
          className="character-img"
          style={{ backgroundImage: `url(${character.img})` }}
          alt=""
        />
      </div>
      <div className="card-info">
        <h3>{character.name}</h3>
        <span>by: {character.portrayed}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
