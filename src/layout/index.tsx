import { useEffect, useState } from 'react';
import Pages from '../pages';
import Header from './Header';
import Sidebar from './Sidebar';
import { CircularProgress } from '@mui/material';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  // TODO: remove when API connect

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Header />
      <Sidebar />
      <Pages />
    </>
  );
};

export default Layout;
