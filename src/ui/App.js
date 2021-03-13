import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import DeckOfCards from '../models/DeckOfCards'

const init = ()=>{
  const deckOfCards = DeckOfCards();
  return{
    deckOfCards,
  };
}

class App extends Component {
  constructor(props){
    super(props);
    this.state=init();
  }
 render(){
     return (
    <div className="App">
      <Header/>
      <Board deck={this.state.deckOfCards}/>
      <Footer/>
    </div>
  );
 }

}

export default App;
