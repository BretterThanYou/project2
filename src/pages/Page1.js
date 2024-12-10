// src/pages/Page1.js
import React from "react";
import Card from "../components/Card";
import mario1 from "../images/SuperMarioBros.jpg"
import mario2 from "../images/supermarioworld.png"
import mario3 from "../images/supermario64.jpg"
import mario4 from "../images/marioparty.jpg"
import mario5 from "../images/mariokart.jpg"
import mario6 from "../images/marioodyssey.jpg"



const Page1 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Super Mario Bros (1985)",
      image: mario1,
      description: "The game that revolutionized platformers.",
    },
    {
      id: 2,
      title: "Super Mario World (1990)",
      image: mario2,
      description: "A successful follow up to the NES game that improved upon graphics and gameplay",
    },
    {
      id: 3,
      title: "Super Mario 64 (1996)",
      image: mario3,
      description: "Mario's icon first foray into the world of 3d platformers",
    },
    {
      id: 4,
      title: "Mario Party (1998)",
      image: mario4,
      description: "A fun party game spinoff for friends and family alike",
    },
    {
      id: 5,
      title: "Mario Kart 64 (1996)",
      image: mario5,
      description: "A fast paced racing simulator with the beloved Super Mario characters",
    },
    {
      id: 6,
      title: "Super Mario Odyssey (2017)",
      image: mario6,
      description: "A modern take on the 3d platformer featuring new and improved gameplay",
    },
  ];

  return (
    <div>
      <h1>Super Mario Bros</h1>
      <p>Discover the story of the iconic plumber.</p>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page1;