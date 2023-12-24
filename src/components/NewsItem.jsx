import PropTypes from 'prop-types';

// Новость - ссылка
export default function NewsItem({img, url, text}) { 
  NewsItem.propTypes = {
    img: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
  };
  return (
    <>
      <img src={img} alt="..." />
      <a href={url}>{text}</a>
    </>
  )
}
