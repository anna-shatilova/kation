import { Link } from 'react-router-dom';
import './styles/header.css';
import { PopupNavMenu } from '../popup-nav-menu/PopupNavMenu';
import { useState } from 'react';

export const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo header__logo">Logo</div>
      <nav className="header__nav nav">
        <Link to="/" className="nav__link">
          Главная
        </Link>
        <Link
          to="/"
          className="nav__link"
          onMouseOver={() => setIsNavMenuOpen(true)}
          onMouseLeave={() => setIsNavMenuOpen(false)}
        >
          Услуги
        </Link>
        {isNavMenuOpen && <PopupNavMenu />}
        <Link to="/" className="nav__link">
          Галерея
        </Link>
        <Link to="/" className="nav__link">
          Контакты
        </Link>
        <Link to="/" className="nav__link">
          Еще что-то
        </Link>
      </nav>
    </header>
  );
};
