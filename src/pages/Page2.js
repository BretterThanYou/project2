// src/pages/Page1.js
import React from "react";
import Card from "../components/Card";
import zelda1 from "../images/TheLegendofZelda.jpg"
import zelda2 from "../images/linktothepast.jpg"
import zelda3 from "../images/ocarinaoftime.jpg"
import zelda4 from "../images/linksawakening.png"
import zelda5 from "../images/windwaker.jpg"
import zelda6 from "../images/botw.jpg"


const Page2 = () => {
  const cardsData = [
    {
      id: 1,
      title: "The Legend of Zelda (1986)",
      image: zelda1,
      description: "Nintendo's first foray into the home console market with a fun action adventure game.",
    },
    {
        id: 2,
        title: "The Legend of Zelda: A Link to the Past (1991)",
        image: zelda2,
        description: "A fantasic followup to the original with improved graphics and gameplay for the super nintendo",
      },
      {
        id: 3,
        title: "The Legend of Zelda: Ocarina of Time (1998)",
        image: zelda3,
        description: "A generation defining entry in the series that brought forth a newfound appreciation for 3d gaming",
      },
      {
        id: 4,
        title: "The Legend of Zelda: Links Awakening (1993)",
        image: zelda4,
        description: "A charming, off the beaten path adventure involving the main character being stuck on an island, trying to escape",
      },
      {
        id: 5,
        title: "The Legend of Zelda: Wind Waker (2002)",
        image: zelda5,
        description: "A follow up to Ocarina of Time, a pirate adventure with lots of mystery",
      },
      {
        id: 6,
        title: "The Legend of Zelda: Breath of the Wild (2017)",
        image: zelda6,
        description: "A complete gameplay overhaul that redefines what an open world game can be",
      },
  ];

  return (
    <div>
      <h1>The Legend of Zelda</h1>
      <p>Learn the myths and legends of the famous fantasy game series.</p>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page2;