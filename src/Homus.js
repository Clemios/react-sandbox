import React, { Component } from 'react';
import Componentus from './Componentus'
import Buttonus from './Buttonus'
import Clockus from './Clockus'

class Homus extends Component {

    state = {
        color: "red",
        text: "",
        label: "placeholder..."
    }

    changeColor = (color) => {
        if (color === 'red') {
            return this.setState({ color: 'blue' })
        }
        this.setState({ color: 'red' })
    }

    setColor = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <p className="App-intro" style={{ color: this.state.color }}>
                    The button control my color.
        </p>
                <p className="App-intro" style={{ color: this.state.text }}>
                    The input control my color.
        </p>
                <Componentus changeColor={this.changeColor} setColor={this.setColor} text={this.state.text} color={this.state.color} />
                <br />
                <Buttonus>{this.state.label}</Buttonus>
                <br />
                <Clockus color={this.state.text} />
            </div>
        );
    }
}

export default Homus;
