import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Slider from './Slider'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Color Picker!</h1>
        </header>

        <main className="all-content">


          <div className="color-window">

          </div>

          <div>
            <ul>
              <li>
                <p>Hue</p>
                <input type="range" min="0" max="360" />
              </li>
              <li>
                <p>Saturation</p>
                <input type="range" min="0" max="100" />
              </li>
              <li>
                <p>Lightness</p>
                <input type="range" min="0" max="100" />
              </li>
            </ul>
          </div>

        </main>
      </div>
    );
  }
}

export default App;


