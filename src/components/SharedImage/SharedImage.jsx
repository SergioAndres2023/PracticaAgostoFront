import React from 'react';

function SharedImage({ imageUrl, name, description }) {
  return (
    <div className="shared-image">
      <img src={imageUrl} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default SharedImage;
