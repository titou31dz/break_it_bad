import React, { useReducer } from "react";
import BrkContext from "./brkContext";
import brkReducer from "./brkReducer";

const BrkProvider = (props) => {
  const initState = {
    loading: true,
    characters: [],
  };

  const [state, dispatch] = useReducer(brkReducer, initState);

  const getCharacters = async () => {
    try {
      dispatch({ type: "SENDING_REQUIST" });
      const res = await fetch("https://www.breakingbadapi.com/api/characters");
      const data = await res.json();
      dispatch({ type: "GET_REQUIST", data });
      dispatch({ type: "REQUIST_FINISHED" });
    } catch (err) {
      console.log(err);
    }
  };

  const charactersMin = state.characters.slice(0, 9);

  return (
    <BrkContext.Provider
      value={{
        loading: state.loading,
        characters: state.characters,
        charactersMin,
        getCharacters,
      }}
    >
      {props.children}
    </BrkContext.Provider>
  );
};

export default BrkProvider;
