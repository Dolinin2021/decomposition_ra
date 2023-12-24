import BroadcastItem from './BroadcastItem';
import HeadLink from './HeadLink';
import PropTypes from 'prop-types';

// Блок - телепрограмма
export default function CardTvProgram({tvProgram}) { 
  CardTvProgram.propTypes = {
    tvProgram: PropTypes.object,
    url: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.object,
    program: PropTypes.object,
    map: PropTypes.func,
  };
  return (
    <div className="tv-program-card card">
      <header>
        <HeadLink url={tvProgram.url} text={tvProgram.name}/>
        <a href={tvProgram.link.url}>{tvProgram.link.name}</a>
      </header>
      <ul>
        {tvProgram.program.map((el,i) =>
          <li key={i}>
            <time>{el.time}</time>
            <BroadcastItem tvShow={el.name} tvChannel={el.channel}/>
          </li>
        )}
      </ul>
    </div>
  )
}
