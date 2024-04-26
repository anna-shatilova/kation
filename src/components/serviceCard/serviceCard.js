import { ButtonWithBorder } from '../../App.styles';
// import { Button } from '../button/button'
import './serviceCard.css';

export const ServiceCard = ({ background, name, descr }) => {
  return (
    <div className="cardBox">
      <div className="material" style={{ background: background }}></div>
      <div className="material-header">
        <h4>{name}</h4>
      </div>
      <div className="description">{descr}</div>
      {/* <button className='btn'>Подробнее</button> */}
      <ButtonWithBorder>Подробнее</ButtonWithBorder>
    </div>
  );
};
