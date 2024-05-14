
import { ButtonWithBorder } from '../../App.styles';
import './serviceCard.css';

export const ServiceCard = ({ background, backgroundImg, name, descr}) => {

  return (
  <div className="card" style={backgroundImg ? {backgroundImage: backgroundImg} : {background: background}}>
  <div className="card-content">
    <h2 className="card-title">{name}</h2>
    <p className="card-body">
      {descr}
    </p>
  <ButtonWithBorder>Подробнее</ButtonWithBorder>
  </div>
</div>
  )
};