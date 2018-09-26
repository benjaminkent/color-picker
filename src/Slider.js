import React, { Component } from 'react';

class Slider extends Component {

    // constructor(props) {
    //     super(props)
    // 
    //     this.state = {
    //         hue:
    //      }
    // }

    render() {
        return (
            <li>
                <p>{this.props.name}</p>
                <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} />
            </li>
        );
    }
}

export default Slider;