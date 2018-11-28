import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    hueValue: 150,
    saturationValue: 68,
    lightnessValue: 48
  }

  _moveHue = event => {
    this.setState({ hueValue: event.target.value })
  }

  _moveSat = event => {
    this.setState({ saturationValue: event.target.value })
  }

  _moveLight = event => {
    this.setState({ lightnessValue: event.target.value })
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>Color Picker!</h1>
        </header>

        <main className="all-content">
          <aside>
            <div className="values">
              <p
                className="hslValue"
                style={{
                  color: `hsl(${this.state.hueValue}, ${
                    this.state.saturationValue
                  }%, ${this.state.lightnessValue}%)`
                }}
              >
                H:
                {this.state.hueValue} S:
                {this.state.saturationValue}% L:
                {this.state.lightnessValue}%
              </p>
            </div>

            <div
              className="color-window"
              style={{
                backgroundColor: `hsl(${this.state.hueValue}, ${
                  this.state.saturationValue
                }%, ${this.state.lightnessValue}%)`
              }}
            />
          </aside>

          <div>
            <ul>
              <li>
                <p>Hue</p>
                <input
                  onChange={this._moveHue}
                  type="range"
                  min="0"
                  max="360"
                  value={this.state.hueValue}
                />
              </li>
              <li>
                <p>Saturation</p>
                <input
                  onChange={this._moveSat}
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.saturationValue}
                />
              </li>
              <li>
                <p>Lightness</p>
                <input
                  onChange={this._moveLight}
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.lightnessValue}
                />
              </li>
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default App
