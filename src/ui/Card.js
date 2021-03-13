import React, {Component} from 'react';
import './Card.css';
import ImageRandom from './ImageRandom';

export default class Card  extends Component{
    render(){
        const visible = (this.props.isSelectNow || this.props.wasGuessed);
        return(
            <div className='card' onClick={this.props.selectCard}>
                {<div className={'front'} >
                        <ImageRandom width={150} height={150} topic={this.props.topic} visible={visible}/>
                    </div>
                }
                {!visible &&                
                    <div className={'back'}/>
                }
            </div>
        )
    }
}
