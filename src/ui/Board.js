import React, {Component} from 'react';
import './Board.css'
import Card from './Card';

export default class Board  extends Component{
    render(){
        return(
            <div className='board'>
                {
                  this.props.deck
                    .map((card, index) => 
                        {
                            const isSelectNow = this.props.pairOfCard.indexOf(card)>-1;
                            return <Card 
                                    key={index} 
                                    topic={card.topic} 
                                    selectCard={()=>this.props.selectCard(card)} 
                                    pairOfCard={this.props.pairOfCard} 
                                    wasGuessed={card.wasGuessed} 
                                    isSelectNow={isSelectNow}/>
                        }
                    )
                  }
            </div>
        )
    }
}
