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
    pairOfCardSelected:[],
    isComparing:false,
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
          <Board deck={this.state.deckOfCards} pairOfCard={this.state.pairOfCardSelected} selectCard={(card)=>this.selectCard(card)}/>
          <Footer/>
      </div>
    );
 }

  selectCard(card){
    // Valida si esta comparando o si la carta esta dentro de las seleccionadas o si ya fue adivinada
    if(this.state.isComparing || this.state.pairOfCardSelected.indexOf(card)>-1 || card.wasGuessed){
      return;
    }
      const pairOfCardSelected = [...this.state.pairOfCardSelected,card];
      this.setState({
        pairOfCardSelected:pairOfCardSelected,
      });
   
    if(pairOfCardSelected.length===2){
      this.comparePairOfCard(pairOfCardSelected);
    }
  }

  comparePairOfCard(pairOfCard){
    this.setState({isComparing:true});

    setTimeout(()=>{
      const [card1, card2]=pairOfCard;
      let deck = this.state.deckOfCards;
      if(card1.topic === card2.topic){
        deck = deck.map((card)=>{
          if(card.topic!==card1.topic){
            return card;
          }
          return {...card,wasGuessed:true};
        });
      }

      this.setState({
        deckOfCards:deck,
        pairOfCardSelected:[],
        isComparing:false,
      });
    },1000)
    
  }

}

export default App;
