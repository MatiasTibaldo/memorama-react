import React, {Component} from 'react';
import './Board.css'
import Card from './Card';

export default class Board  extends Component{
    render(){
        return(
            <div className='board'>{this.props.deck.map((card, index)=><Card key={index} topic={card.topic} />)}</div>
        )
    }
}
