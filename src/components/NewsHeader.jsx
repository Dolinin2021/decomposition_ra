import HeadLink from './HeadLink';
import PropTypes from 'prop-types';

// Заголовок блока новостей
export default function NewsHeader({news, date}) { 
  NewsHeader.propTypes = {
    news: PropTypes.object,
    date: PropTypes.string,
    map: PropTypes.func,
  };
  return (
    <header className="header-news">
      <ul className="header-news-list">
        {news.map((el,i) =>
          <li key={i}>
            {<HeadLink
              url={el.url}
              text={el.name}/>}
          </li>)}
      </ul>
      <p>{date}</p>
    </header>
  )
}
