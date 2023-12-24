import HeadLink from './HeadLink';
import BroadcastItem from './BroadcastItem';
import PropTypes from 'prop-types';

// Блок - что идет в эфире
export default function CardBroadcast({broadcast}) { 
  CardBroadcast.propTypes = {
    broadcast: PropTypes.object,
    tvChannel: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
    cast: PropTypes.object,
  };
  return (
    <div className="broadcast-card card">
      <HeadLink url={broadcast.url} text={broadcast.name}/>
      <ul>
        {broadcast.cast.map((el,i) =>
          <li key={i}>
            <img src={el.img} alt="..." />
            <BroadcastItem
              tvShow={el.tvShow}
              tvChannel={el.tvChannel}/>
          </li>
        )}
      </ul>
    </div>
  )
}
