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
    player:1,
    points1:0,
    points2:0,
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
          <Header reset={()=>this.reset()}/>
          <Board deck={this.state.deckOfCards} pairOfCard={this.state.pairOfCardSelected} selectCard={(card)=>this.selectCard(card)}/>
          <Footer  player={this.state.player} points1={this.state.points1} points2={this.state.points2}/>
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
      let player= this.state.player;
      let points1 = this.state.points1;
      let points2 = this.state.points2;
      let deck = this.state.deckOfCards;
      if(card1.topic === card2.topic){
        if(player===1){
          points1=points1+1;
        }else{
          points2=points2+1;
        }
        deck = deck.map((card)=>{
          if(card.topic!==card1.topic){
            return card;
          }
          return {...card,wasGuessed:true};
        });
      }else{ // si no hay acierto cambia el turno al otro jugador
        player = player===1?2:1;
      }
      this.validateWinner(deck,points1,points2);
      this.setState({
        deckOfCards:deck,
        pairOfCardSelected:[],
        isComparing:false,
        player:player,
        points1:points1,
        points2:points2,
      });
    },1000)
  }  

  validateWinner(deck,points1,points2){
    if(deck.filter((card)=>!card.wasGuessed).length===0){
      if(points1>points2){
        alert("Ganador jugador número 1")
      }
      if(points2>points1){
        alert("Ganador jugador número 2")
      }
      if(points1===points2){
        alert("Empate")

      }
    }
  }

  reset(){
    window.location.reload();
  }
}

export default App;
