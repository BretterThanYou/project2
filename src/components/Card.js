// src/components/Card.js
import React, { useState } from "react";
import ModalWindow from "./ModalWindow";
import "./Card.css";

const Card = ({ title, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={title} onClick={() => setIsModalOpen(true)} />
      <h3>{title}</h3>
      {isModalOpen && (
        <ModalWindow
          title={title}
          image={image}
          description={description}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Card;