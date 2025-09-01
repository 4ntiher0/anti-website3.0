import Header from "./Header"; 
import Navi from "./Navi";
import Footer from "./Footer"; 

import './styles.css'; 
import './util.css'; 

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navi />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
