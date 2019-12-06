import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter as Router, Route } from 'react-router-dom';
import './style.css';

ReactDOM.render(
  <Router basename={'/'}>
    <Route component={App} />
  </Router>
  ,
  document.getElementById('root'));