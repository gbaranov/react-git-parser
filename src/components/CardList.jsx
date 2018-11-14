import React from 'react';
import Card from './Card.jsx';

const CardList = (props) => {
  return (
    <div className="card-list">
        {props.cards.map(card => <Card key={card.id} {...card}/>)}
    </div>
  );
};

export default CardList;
