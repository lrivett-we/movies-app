import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieSelector from './containers/MovieSelector/MovieSelector'
import MovieDetailView from './containers/MovieDetailView/MovieDetailView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/movie/:id' component={MovieDetailView} />
          <Route path='/' exact component={MovieSelector} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
