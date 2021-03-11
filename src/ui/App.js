import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Board from './Board';

class App extends Component {
 render(){
     return (
    <div className="App">
      <div className='Heder'>
      <Header/>
      <Board />
      <Footer/>
      </div>
    </div>
  );
 }

}

export default App;
