import { useState } from 'react';
import { ServiceCard } from '../serviceCard/serviceCard';
import 'animate.css/animate.min.css';
import './serviceList.css';

export const ServiceList = ({ heading, array }) => {

  const [isHovered, setIsHovered] = useState(false);

  const renderServiceCards = () => {
    return array.map((card, index) => (
      <ServiceCard
        key={index}
        background={card.color}
        backgroundImg={card.url ? `url(${card.url})` : ''}
        name={card.name}
        descr={card.descr ? card.descr : ''}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    ));
  };

  return (
    <div className="wrap">
      <div className="headerWrapper">
        <h1>{heading}</h1>
      </div>
      {
        <div className='AnimationOnScrollLeft'
        >
          <div className="cardsWrapper">{renderServiceCards()}</div>
        </div>
      }
    </div>
  );
};