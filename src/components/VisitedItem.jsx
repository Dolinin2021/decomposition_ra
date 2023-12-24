import PropTypes from 'prop-types';

// Единица посещаемая с ссылкой
export default function VisitedItem({url, name, text}) {
  VisitedItem.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  };
  return (
    <>
      <a href={url}>{name}</a>
      <p>{text}</p>
    </>
  )
}
