import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import AllBeers from './components/AllBeers'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allbeers" component={AllBeers} />
          {/* <Route path="/allbeers/:_id" component={BeerDetail} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} /> */}
        </Switch>
      </div>

    );
  }
}

export default App;
