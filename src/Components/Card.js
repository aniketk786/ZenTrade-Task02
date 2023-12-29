// Card.js
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <input type="file" />
    </div>
  );
};

export default Card;
