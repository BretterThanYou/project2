// src/components/ModalWindow.js
import React from "react";
import "./ModalWindow.css";

const ModalWindow = ({ title, image, description, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          &times; {/* Close Icon */}
        </button>
        <h2>{title}</h2>
        {/* Image with a max size for better responsiveness */}
        <img src={image} alt={title} className="modal-image" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ModalWindow;