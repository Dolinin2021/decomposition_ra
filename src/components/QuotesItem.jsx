import PropTypes from 'prop-types';

// Блок с котировкой
export default function QuotesItem({currency, value, difference}) { 
  QuotesItem.propTypes = {
    currency: PropTypes.string,
    value: PropTypes.string,
    difference: PropTypes.string,
  };
  return (
    <>
      <h5>{currency}</h5>
      <p>{value}</p>
      <span>{difference}</span>
    </>
  )
}
