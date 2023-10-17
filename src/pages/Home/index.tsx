import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('translation');

  return (
    <>
      <h1 className={styles.title}>{t('home')}</h1>
      <pre>{import.meta.env.VITE_APP_URL}</pre>
    </>
  );
};

export default Home;
