import HeadLink from './HeadLink';
import VisitedItem from './VisitedItem';
import PropTypes from 'prop-types';

// Блок - посещаемые сайты
export default function CardVisited({visited}) { 
  CardVisited.propTypes = {
    visited: PropTypes.object,
    url: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.object,
    map: PropTypes.func,
  };
  return (
    <div className="visited-card card">
      <HeadLink url={visited.url} text={visited.name}/>
      <ul>
        {visited.category.map((el,i) =>
          <li key={i}>
            <VisitedItem url={el.url} name={el.name} text={el.text}/>
          </li>
        )}
      </ul>
    </div>
  )
}
