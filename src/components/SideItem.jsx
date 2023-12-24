import HeadLink from './HeadLink';
import PropTypes from 'prop-types';

// Дополнительный блок с ссылкой
export default function SideItem({item}) { 
  SideItem.propTypes = {
    item: PropTypes.object,
    img: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
  };
  return (
    <div className="side-item">
      <img src={item.img} alt="..." />
      <HeadLink text={item.name} url={item.url}/>
      <p>{item.text}</p>
    </div>
  )
}
