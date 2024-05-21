import { Link } from 'react-router-dom';
import * as S from './PopupNavMenu.styles';

export const PopupNavMenu = ({ setIsHoverOnPopup }) => {
  return (
    <S.PopupMenu
      onMouseOver={() => setIsHoverOnPopup(true)}
      onMouseLeave={() => setIsHoverOnPopup(false)}
    >
      <S.PopupMenuList>
        <li>
          <Link to="/">Золочение</Link>
        </li>
        <li>
          <Link to="#">Золото-Кобольт(сплав)</Link>
        </li>
        <li>
          <Link to="#">Золото-Никель(сплав)</Link>
        </li>
        <li>
          <Link to="#">Серебрение</Link>
        </li>
        <li>
          <Link to="#">Серебро-Сурьма(сплав)</Link>
        </li>
        <li>
          <Link to="#">Палладирование</Link>
        </li>
        <li>
          <Link to="#">Платинирование</Link>
        </li>
        <li>
          <Link to="#">Никелирование</Link>
        </li>
        <li>
          <Link to="#">Меднение</Link>
        </li>
        <li>
          <Link to="#">Оловянирование</Link>
        </li>
        <li>
          <Link to="#">Олово-Висмут(сплав)</Link>
        </li>
        <li>
          <Link to="#">Подготовка поверхности</Link>
        </li>
        <li>
          <Link to="#">Осаждение металов</Link>
        </li>
        <li>
          <Link to="#">Осаждение драг металов</Link>
        </li>
        <li>
          <Link to="#">Пассивация</Link>
        </li>
        <li>
          <Link to="#">Анодирование</Link>
        </li>
        <li>
          <Link to="#">Удаление гальванических покрытий</Link>
        </li>
        <li>
          <Link to="#">ОБРАБОТКА ГАЛТОВАНИЕМ</Link>
        </li>
        <li>
          <Link to="#">ОБРАБОТКА ПЕСКОСТРУЙКОЙ</Link>
        </li>
      </S.PopupMenuList>
    </S.PopupMenu>
  );
};
