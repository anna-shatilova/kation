import { Routes, Route } from 'react-router-dom';
import { Mainpage } from '../pages/mainpage/mainpage';
import { NotFound } from '../pages/NotFound/NotFound';
import { Gallery } from '../pages/gallery/Gallery';
import { Contacts } from '../pages/contacts/Contacts';
import { ServiceFoto } from '../pages/service-foto/ServiceFoto';
import { AboutPage } from '../pages/about/About';
import { ServiceInfo } from '../pages/service-info/ServiceInfo';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/service-foto/:id" element={<ServiceFoto />} />
      <Route path="/service-info/:id" element={<ServiceInfo />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
