import React, { Component } from 'react';

class Requettus extends Component {

componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`)
    .then(results => {
        return results.json();
    }).then(data => {
        console.log(data) ;
        return (Object.keys(data).map((key) => console.log(data[key])));
    })
}

    render() {
        return (
            <div>
            REQUETTES
            </div>
        );
    }
}

export default Requettus;
