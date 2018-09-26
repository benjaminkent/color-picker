import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hueValue: 50,
      saturationValue: 70,
      lightnessValue: 90
    }
  }

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
                <input type="range" min="0" max="360" value={this.state.hueValue} />
              </li>
              <li>
                <p>Saturation</p>
                <input type="range" min="0" max="100" value={this.state.saturationValue} />
              </li>
              <li>
                <p>Lightness</p>
                <input type="range" min="0" max="100" value={this.state.lightnessValue} />
              </li>

            </ul>
          </div>

        </main>
      </div>
    );
  }
}

export default App;



