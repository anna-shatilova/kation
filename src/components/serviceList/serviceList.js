import { ServiceCard } from '../serviceCard/serviceCard';
import 'animate.css/animate.min.css';
import './serviceList.css';
import { TitleH1 } from '../../App.styles';

export const ServiceList = ({ heading, array }) => {
  const renderServiceCards = () => {
    return array.map((card, index) => {
      // console.log(card.url);
      return (
        <ServiceCard
          key={index}
          background={card.color}
          backgroundImg={card.url ? `url(${card.url})` : ''}
          name={card.name}
          descr={card.descr ? card.descr : ''}
        />
      );
    });
  };

  return (
    <div className="wrap">
      <div className="headerWrapper">
        <TitleH1>{heading}</TitleH1>
      </div>
      {
        <div className="AnimationOnScrollLeft">
          <div className="cardsWrapper">{renderServiceCards()}</div>
        </div>
      }
    </div>
  );
};
