import Header from "../components/Header";
import Navi from "../components/Navi";
import Footer from "../components/Footer";
import './styles.css'; // Import your styles.css file
import './util.css'; // Import your util.css file

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <Navi />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
