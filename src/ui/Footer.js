import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer className='footer'>
                <div className={`turn${this.props.player}`}>
                    Turno jugador {this.props.player}
                </div>
                <div className='hits'>
                    <div className='player1'>Acierto jugador 1: {this.props.points1}</div>
                    <div className='player2'>Acierto jugador 2: {this.props.points2}</div>
                </div>
            </footer>
        );
    }
};