import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.scss';

const SearchForm = ({ onSubmit, inputRef }) => (
    <form className={css.searchForm} onSubmit={onSubmit}>
      <input className={css.searchForm__input} ref={inputRef} type="text" autoComplete="off" placeholder="Search images..."/>
    </form>
  )  


SearchForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default SearchForm;