
import { useState } from 'react';
import { ButtonWithBorder } from '../../App.styles';
import './serviceCard.css';

export const ServiceCard = ({ background, backgroundImg, name, descr, isHovered, setIsHovered}) => {


  return (
    <div className="cardBox"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
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
