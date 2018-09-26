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
              <Slider
                name="Hue"
                min="0"
                max="360"
                value="100"
              />
              <Slider
                name="Saturation"
                min="0"
                max="100"
                value="50"
              />
              <Slider
                name="Lightness"
                min="0"
                max="100"
                value="90"
              />

            </ul>
          </div>

        </main>
      </div>
    );
  }
}

export default App;


