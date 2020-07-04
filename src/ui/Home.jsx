import React from "react";

import CharacterList from "../component/CharacterList";
import Hero from "../component/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <CharacterList />
      </div>
    </div>
  );
};

export default Home;
