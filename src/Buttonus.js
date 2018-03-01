import React, { Component } from 'react';

class Buttonus extends Component {

    state = {
        label: this.props.children
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({
                label: 'coucou'
            }),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
                <button>
                    {this.state.label}
                </button>
        );
    }
}

export default Buttonus;
