import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

// Тело блока с новостями
export default function NewsBody({news}) { 
  NewsBody.propTypes = {
    news: PropTypes.object,
    map: PropTypes.func,
  };
  return (
    <ul className="body-news">
      {news.map((el,i) => 
        <li key={i}>
          {<NewsItem
            img={el.img}
            url={el.url}
            text={el.text}/>}
        </li>)}
    </ul>
  );
}
