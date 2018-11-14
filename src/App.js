import React, { Component } from 'react';
import CardList from './components/CardList.jsx';
import Form from './components/Form.jsx';

class App extends Component {

  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    console.log(cardInfo);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.cards}/>
        <Form onSubmit={this.addNewCard}/>
      </div>
    );
  }
}

export default App;
