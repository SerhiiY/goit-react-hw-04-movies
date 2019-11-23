import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './style.module.scss';

const Header = () => (
  <section className={css.header}>
    <NavLink to='/' className={css.link}>Home</NavLink>
    <NavLink to='/movies'>Movies</NavLink>
  </section>
)

export default Header;