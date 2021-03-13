import React, {Component} from 'react';
import './Card.css';
import ImageRandom from './ImageRandom';

export default class Card  extends Component{
    render(){
        return(
            <div className='card'>
                <div className={'front'}>
                    <ImageRandom width={150} height={150} topic={this.props.topic}/>
                </div>
                <div className={'back'}/>
            </div>
        )
    }
}
