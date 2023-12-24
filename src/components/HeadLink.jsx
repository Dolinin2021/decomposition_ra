import PropTypes from 'prop-types';

// Заголовок - ссылка
export default function HeadLink({text, url}) {
  HeadLink.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
  };
  return (
    <a href={url}>
      <h4>{text}</h4>
    </a>
  )
}
