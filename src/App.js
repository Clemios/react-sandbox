import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import Homus from './Homus';
import Requettus from './Requettus';

class App extends Component {
  renderContent = () => (
    <Switch>
      <Route exact path="/" component={Homus} />
      <Route exact path="/requests" component={Requettus} />
    </Switch>
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/"><button style={{ float: 'left' }}>Home</button></Link>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/requests"><button style={{ float: 'right' }}>Requests</button></Link>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
