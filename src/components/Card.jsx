import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img className="avatar" alt="avatar" src={props.avatar_url} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="company">{props.company}</div>
      </div>
    </div>

  );
};

export default Card;
