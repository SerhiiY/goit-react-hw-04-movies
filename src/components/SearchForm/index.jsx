import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.scss';

const SearchForm = ({ handleSubmit, onInputChange }) => (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input className={css.searchFormInput} type="text" placeholder="Search movies..." onChange={onInputChange}/>
      <button type='submit' className={css.button}>Search</button>
    </form>
  )


SearchForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default SearchForm;