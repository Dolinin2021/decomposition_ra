import PropTypes from 'prop-types';

// Меню - ссылки разделов
export default function SearchMenu({searchMenu}) { 
  SearchMenu.propTypes = {
    searchMenu: PropTypes.object,
    map: PropTypes.func,
  };
  return (
    <ul className="list-nav">
      {searchMenu.map((el,i) => 
        <li key={i}>
          <a href={el.url}>{el.text}</a>
        </li>
      )}
    </ul>
  )
}
