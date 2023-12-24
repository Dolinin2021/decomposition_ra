import HeadLink from './HeadLink'
import PropTypes from 'prop-types';

// Блок - погода
export default function CardWeather({weather}) { 
  CardWeather.propTypes = {
    weather: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string,
    current: PropTypes.string,
    today: PropTypes.string,
  };
  return (
    <div className="weather-card card">
      <HeadLink text={weather.name} url={weather.url}/>
      <div className="weather">
        <img src={weather.img} alt="..." />
        <p>{weather.current}</p>
        <span>{weather.today}</span>
      </div>
    </div>
  )
}
