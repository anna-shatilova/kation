

import { ButtonWithBorder } from '../../App.styles';
import './serviceCard.css';

export const ServiceCard = ({ background, backgroundImg, name, descr, isHovered, onCardHover}) => {

  return (
    <div 
      // className={`cardBox ${isHovered ? 'active' : ''}`}
      className='cardBox'
      onMouseEnter={() => onCardHover(true)}
      onMouseLeave={() => onCardHover(false)}
      style={{ height: isHovered ? 'auto' : '300px' }}
    >
    <div className='material' style={backgroundImg ? {backgroundImage: `url(${backgroundImg})`} : {background: background}}></div>
      <div className="material-header">
        <h4>{name}</h4>
      </div>
      {isHovered && <div className="description">{descr}</div>}
      <ButtonWithBorder>Подробнее</ButtonWithBorder>
    </div>
  );
};
