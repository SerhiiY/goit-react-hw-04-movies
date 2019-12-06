import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const key = '399eb4ff66260035740cfbb2ef9e0a30';

const fetchMovies = (url) => {
  return axios
    .get(`${url}api_key=${key}`)
    .then(res => res.data)
    .catch(err => console.log(err));
}

export default fetchMovies;