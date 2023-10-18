import Pages from "../pages";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Pages />
    </>
  );
};

export default Layout;
