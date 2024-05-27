import { Link } from 'react-router-dom';
import { PopupNavMenu } from '../popup-nav-menu/PopupNavMenu';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as S from './Header.styles';

export const Header = () => {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [isHoverOnPopup, setIsHoverOnPopup] = useState(false);

  return (
    <S.Header>
      <Link to="/">
        <S.HeaderLogo src="/img/logo.svg" alt="logo" />
      </Link>
      <S.NavMenu>
        <Link to="/">Главная</Link>
        <Link
          to="/"
          onMouseOver={() => setIsPopupMenuOpen(true)}
          onMouseLeave={() => setIsPopupMenuOpen(false)}
        >
          Услуги
          <ExpandMoreIcon sx={{ width: '15px', margin: '0.05em' }} />
        </Link>
        {(isPopupMenuOpen || isHoverOnPopup) && (
          <PopupNavMenu setIsHoverOnPopup={setIsHoverOnPopup} />
        )}
        <Link to="/gallery">Галерея</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/">Информация для технолога</Link>
        <Link to="/about">О нас</Link>
      </S.NavMenu>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z"
          stroke="#AFEEEE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.99998 21L7.34998 16.65"
          stroke="#AFEEEE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </S.Header>
  );
};
