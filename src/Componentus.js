import React, { Component } from 'react';

class Componentus extends Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.changeColor(this.props.color)}>
                    Click me bitch !
                </button>
                <input placeholder='Enter a color...' value={this.props.text} onChange={(e) => this.props.setColor(e)}></input>
            </div>
        );
    }
}

export default Componentus;
