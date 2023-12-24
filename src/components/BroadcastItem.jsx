import PropTypes from 'prop-types';

// Блок с текущей программой и каналом.
export default function BroadcastItem({tvShow, tvChannel}) {
  BroadcastItem.propTypes = {
    tvShow: PropTypes.string,
    tvChannel: PropTypes.string,
  };
  return (
    <>
      <p>{tvShow}</p>
      <span>{tvChannel}</span>
    </>
  )
}
