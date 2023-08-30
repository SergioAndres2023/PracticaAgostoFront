//recibe  image (url de la imagen),  title , description

import React from 'react';

function Card({ image, name, description, isExpanded, toggleExpand }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-img-container">
        {image && <img src={image} className="card-img" alt="Card" />}
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {isExpanded && <p className="card-text">{description}</p>}
        <button className="btn btn-primary" onClick={toggleExpand}>
          {isExpanded ? "Ocultar Descripción" : "Mostrar Descripción"}
        </button>
      </div>
    </div>
  );
}

export default Card;
