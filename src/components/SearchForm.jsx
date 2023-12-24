import PropTypes from 'prop-types';

// Форма поиска
export default function SearchForm(prop) { 
  return (
    <form action="" className="search-form">
      <input
        type="text"
        className="search-input"
        onChange={() => prop}/>
      <button className="search-btn">Найти</button>
    </form>
  );
}

SearchForm.propTypes = {
  prop: PropTypes.func,
};
