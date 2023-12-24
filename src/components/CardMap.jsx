import HeadLink from './HeadLink';
import PropTypes from 'prop-types';

// Блок - карта местности
export default function CardMap({map}) { 
  CardMap.propTypes = {
    map: PropTypes.object,
    url: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  };
  return (
    <div className="maps-card card">
      <HeadLink url={map.url} text={map.name}/>
      <p>{map.text}</p>
    </div>
  )
}
