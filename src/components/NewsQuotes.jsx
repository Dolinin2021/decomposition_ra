import QuotesItem from './QuotesItem';
import PropTypes from 'prop-types';

// Блок котировок
export default function NewsQuotes({quotes}) { 
  NewsQuotes.propTypes = {
    quotes: PropTypes.object,
    map: PropTypes.func,
  };
  return (
    <ul className="quotes">
      {quotes.map((el,i) =>
        <li key={i}>
          {<QuotesItem
            currency={el.currency}
            value={el.value}
            difference={el.difference}/>}
        </li>
      )}
    </ul>
  )
}
