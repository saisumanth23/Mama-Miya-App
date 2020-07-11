import React, {Component} from 'react';
import './App.css';

import Greet from './components/Greet'
import WelcomeComponent from './components/Welcome'

class App extends Component {

  render() {
    return (
    <div className = "App">
      <Greet/>
      <WelcomeComponent/>
    </div>
    )
  
  }
}

export default App;
