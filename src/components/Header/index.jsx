import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './style.module.scss';

const Header = ({ currentPage }) => (
  <section className={css.header}>
    <NavLink exact to='/' className={css.link} activeClassName={css.linkActive}>Home</NavLink>
    <NavLink to='/movies' className={css.link} activeClassName={css.linkActive} >Movies</NavLink>
  </section>
)

export default Header;