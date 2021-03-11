import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <header className='header'>
                <div className='title'>Memorama</div>
                <div>
                    <button className='buttonReset'>Reiniciar</button>
                </div>
            </header>
        );
    }
};