import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hueValue: 180,
      saturationValue: 50,
      lightnessValue: 50
    }
  }

  _moveHue = event => {
    let hueValue = event.target.value

    this.setState((state, props) => {
      return {
        hueValue: hueValue
      }
    })
  }

  _moveSat = event => {
    let saturationValue = event.target.value

    this.setState((state, props) => {
      return {
        saturationValue: saturationValue
      }
    })
  }

  _moveLight = event => {
    let lightnessValue = event.target.value

    this.setState((state, props) => {
      return {
        lightnessValue: lightnessValue
      }
    })
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
                <input onChange={this._moveHue} type="range" min="0" max="360" value={this.state.hueValue} />
              </li>
              <li>
                <p>Saturation</p>
                <input onChange={this._moveSat} type="range" min="0" max="100" value={this.state.saturationValue} />
              </li>
              <li>
                <p>Lightness</p>
                <input onChange={this._moveLight} type="range" min="0" max="100" value={this.state.lightnessValue} />
              </li>

            </ul>
          </div>

        </main>
      </div>
    );
  }
}

export default App;



