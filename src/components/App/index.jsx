import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import qs from 'qs';

import HomePage from '../HomePage';
import MoviesPage from '../MoviesPage';
import Header from '../Header';
import MoviesApi from '../MoviesApi';

export default class App extends Component {

  state = {
    spinner: false,
    popularMoviesList: [],
    searchMoviesList: [],
  }

  fetchMovies = (url, list) => {
    if (!this.state.spinner) this.setState({ spinner: true });
    MoviesApi(url)
      .then(({ results }) => this.setState({ [list]: results }))
      .finally(() => this.setState({ spinner: false }));
  }
  
  fetchPopularMovies = () => {
    this.fetchMovies(`/trending/movie/week?`, 'popularMoviesList');
  }
 
  fetchMoviesByQuery = (query) => {
    if (!query) return;
    this.fetchMovies(`/search/movie?query=${query}&`, 'searchMoviesList');
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.query) return;
    const { location, history } = this.props;
    history.push({
      ...location,
      search: qs.stringify({ query: this.query }),
    });
  }

  onInputChange = ({ target: { value } }) => {
    this.query = value;
  }

  render() {
    const { spinner, popularMoviesList, searchMoviesList } = this.state,
      { location: { pathname } } = this.props;
    
    return (
      <Fragment>
        <Header currentPage={pathname} changePage={this.changePage}/>
          <Switch>
            <Route path='/' exact render={props => <HomePage {...props}
              moviesList={popularMoviesList}
              fetchMovies={this.fetchPopularMovies}
            />} />
            <Route path='/movies' render={props => <MoviesPage {...props}
              moviesList={searchMoviesList}
              handleSubmit={this.handleSubmit}
              onInputChange={this.onInputChange}
              fetchMoviesByQuery={this.fetchMoviesByQuery}
            />} />
            <Redirect to='/' />
          </Switch>  
        {spinner && <Loader />}
      </Fragment>
    )
  }
}