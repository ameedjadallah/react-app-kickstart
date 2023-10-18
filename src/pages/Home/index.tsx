import { useEffect } from "react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import useStores from "../../hooks/useStores";
import { LoadingPlaceholder } from "../../components/common/LoadingPlaceholder";

const Home = () => {
  const {
    appStore,
    appStore: { organizations, isLoading },
  } = useStores();
  const { t } = useTranslation("translation");

  useEffect(() => {
    const load = async () => {
      await appStore.loadOrganizations();
    };
    load();
  }, [appStore]);

  return (
    <LoadingPlaceholder isLoading={isLoading}>
      <h1 className={styles.title}>{t("home")}</h1>
      <pre>{import.meta.env.VITE_APP_URL}</pre>
      {organizations?.map(({ name, displayName }) => (
        <span key={name}>{displayName}</span>
      ))}
    </LoadingPlaceholder>
  );
};

export default Home;
