import { Routes, Route } from 'react-router-dom';
import { Mainpage } from '../pages/mainpage/mainpage';
import { GalleryFotoGold } from '../pages/gallery-foto-gold/GalleryFotoGold';
import { NotFound } from '../pages/NotFound/NotFound';
import { Gallery } from '../pages/gallery/Gallery';
import { Contacts } from '../pages/contacts/Contacts';
import { AboutPage } from '../pages/about/About';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery-foto-gold" element={<GalleryFotoGold />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
