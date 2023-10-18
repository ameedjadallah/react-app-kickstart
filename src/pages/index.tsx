import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Pages = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default Pages;
