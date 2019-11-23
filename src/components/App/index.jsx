import React, { Component, createRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';


import HomePage from '../HomePage';
import MoviesPage from '../MoviesPage';
import Header from '../Header';

export default class App extends Component {

  state = {
    spinner: true,
    filmsList: [],
  }

  inputRef = createRef();

  api_key = '399eb4ff66260035740cfbb2ef9e0a30';
  api_url = 'https://api.themoviedb.org/3'

  componentDidMount() {
    this.fetchFilms(`${this.api_url}/trending/movie/week?api_key=${this.api_key}`);
  }

  fetchFilms = (url) => {
    if (!this.state.spinner) this.setState({ spinner: true });
    axios
      .get(url)
      .then(res => this.setState({ filmsList: res.data.results }))
      .catch(err => console.log(err))
      .finally(() => this.setState({ spinner: false }))
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.fetchFilms(`${this.api_url}/search/movie?api_key=${this.api_key}&query=${this.inputRef.current.value}`);
  }
  
  render() {
    const { spinner, filmsList } = this.state;
    return (
      <Router>
        <Header />
        {spinner && <Loader />}
          <Switch>
            <Route path='/' exact render={props => <HomePage {...props} filmsList={filmsList}/>} />
            <Route path='/movies' render={props => <MoviesPage {...props} filmsList={filmsList} onSubmit={this.onSubmit} inputRef={this.inputRef}/>} />
            <Redirect to='/' />
          </Switch>
      </Router>
    )
  }
}