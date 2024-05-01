import { useState } from 'react';
import { ServiceCard } from '../serviceCard/serviceCard';
import 'animate.css/animate.min.css';
import './serviceList.css';

export const ServiceList = ({ heading, array }) => {

  const [hoveredCards, setHoveredCards] = useState(Array(array.length).fill(false));
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (index, isHovered) => {
    // const updatedHoveredCards = [...hoveredCards];
    // updatedHoveredCards[index] = isHovered;
    // setHoveredCards(updatedHoveredCards);
    if (isHovered) {
      setActiveCard(index);
    } else {
      setActiveCard(null);
    }
  };
  
  const renderServiceCards = () => {
    return array.map((card, index) => (
      <ServiceCard
        key={index}
        isHovered={activeCard === index} 
        onCardHover={(isHovered) => handleCardHover(index, isHovered)}
        background={card.color}
        backgroundImg={card.url ? `url(${card.url})` : ''}
        name={card.name}
        descr={card.descr ? card.descr : ''}
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