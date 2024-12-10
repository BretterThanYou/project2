// src/pages/Page1.js
import React from "react";
import Card from "../components/Card";
import pokemon1 from "../images/Pokemon_Red.png"
import pokemon2 from "../images/redrescueteam.jpg"
import pokemon3 from "../images/pokemonranger.png"
import pokemon4 from "../images/pokkentournament.jpg"
import pokemon5 from "../images/pokemonlegendsarceus.jpg"
import pokemon6 from "../images/pokemonscarlet.jpg"



const Page3 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Pokemon Red (1996)",
      image: pokemon1,
      description: "The iconic first entry in the series. For the Gameboy.",
    },
    {
        id: 2,
        title: "Pokemon Mystery Dungeon (2005)",
        image: pokemon2,
        description: "A roguelike dungeon crawler with a well written epic story",
      },
      {
        id: 3,
        title: "Pokemon Ranger (2006)",
        image: pokemon3,
        description: "A spin off game for the Nintendo DS that utilizes the unique touch screen controls.",
      },
      {
        id: 4,
        title: "Pokken Tournament (2017)",
        image: pokemon4,
        description: "A 3d fighting game with stunning visuals featuring fan favorite pokemon",
      },
      {
        id: 5,
        title: "Pokemon Legends Arceus (2022)",
        image: pokemon5,
        description: "A reimagining of the core monster catching genre featuring open world gameplay.",
      },
      {
        id: 6,
        title: "Pokemon Scarlet (2022)",
        image: pokemon6,
        description: "The newest entry in the series featuring the new terrastalation forms along with open world gameplay.",
      },
  ];

  return (
    <div>
      <h1>Pokemon</h1>
      <p>Understand how this cute monster collecting genre became an overnight sensation.</p>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page3;