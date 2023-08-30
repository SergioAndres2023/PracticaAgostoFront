import React from 'react';

function ImageUploader({ handleImageChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="imageInput" className="form-label">Tu Imagen !!</label>
      <input
        type="file"
        className="form-control"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImageUploader;






