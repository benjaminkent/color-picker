import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hueValue: 214,
      saturationValue: 94,
      lightnessValue: 48
    }
  }

  _moveHue = event => {
    let hueValue = event.target.value

    this.setState((state, props) => {
      return {
        hueValue
      }
    })
  }

  _moveSat = event => {
    let saturationValue = event.target.value

    this.setState((state, props) => {
      return {
        saturationValue
      }
    })
    console.log(saturationValue)
  }

  _moveLight = event => {
    let lightnessValue = event.target.value

    this.setState((state, props) => {
      return {
        lightnessValue
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

          <aside>
            <div className="values">
              <p style={{ color: `hsl(${this.state.hueValue}, ${this.state.saturationValue}%, ${this.state.lightnessValue}%)` }}>H:{this.state.hueValue} S:{this.state.saturationValue}% L:{this.state.lightnessValue}%</p>
            </div>

            <div className="color-window" style={{ backgroundColor: `hsl(${this.state.hueValue}, ${this.state.saturationValue}%, ${this.state.lightnessValue}%)` }}>
            </div>
          </aside>

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
      </div >
    );
  }
}

export default App;








