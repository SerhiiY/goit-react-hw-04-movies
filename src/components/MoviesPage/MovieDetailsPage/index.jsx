import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import css from './style.module.scss';
import Loader2 from 'react-loader-spinner';

import Cast from './Cast';
import Reviews from './Reviews';
import MoviesApi from '../../MoviesApi';
import MovieCard from './MovieCard';

export default class MovieDetailsPage extends Component {
  
  state = {
    spinner2: false,
    movieInfo: {},
    credits: [],
    reviews: []
  }

  location_state = this.props.location.state;

  componentDidMount() {
    this.fetchMovieInfo(this.props.match.params.movie_id, 'movieInfo');
  }

  fetchMovieInfo = (url, infoType) => {
    if (!this.state.spinner2) this.setState({ spinner2: true });

    MoviesApi(`/movie/${url}?`)
      .then((data) => data && this.setState({
        [infoType]: infoType === 'reviews' ? data.results :
          infoType === 'credits' ? data.cast : data
      }))
      .finally(() => {
        this.setState({ spinner2: false });
        if(infoType === 'credits' || infoType === 'reviews')
        window.scrollTo({
          top: 400,
          behavior: "smooth"
        });
      })

  }

  fetchCast = () => {
    this.fetchMovieInfo(`${this.state.movieInfo.id}/credits`, 'credits');
  }

  fetchReviews = () => {
    this.fetchMovieInfo(`${this.state.movieInfo.id}/reviews`, 'reviews');
  }

  goBack = () => {
    const { history } = this.props;
    this.location_state ?
    history.push({ ...this.location_state }) :
    history.push({ pathname: '/' })
  }

  render() {
    const { match: { url } } = this.props;
    const { movieInfo, spinner2, credits, reviews } = this.state;

    return (
      <>
        { movieInfo &&
          <section className={css.movieDetailsPage}>
            <button className={css.backButton} onClick={this.goBack}>Back</button>
            <MovieCard movieInfo={movieInfo}/>
            <div>
              <p>Additional information</p>
              <Link to={`${url}/cast`} onClick={this.fetchCast}>Cast</Link>
              <br />
              <Link to={`${url}/reviews`} onClick={this.fetchReviews}>Reviews</Link>
            </div>
            <Switch>
              <Route path={`${url}/cast`} render={props => <Cast credits={credits}/>} />
              <Route path={`${url}/reviews`} render={props => <Reviews reviews={reviews}/>}/>
            </Switch>
            {spinner2 && <Loader2 style={{zIndex: "99", display: "block"}}/>}  
          </section>
        }  
      </>
    )
  }
}
