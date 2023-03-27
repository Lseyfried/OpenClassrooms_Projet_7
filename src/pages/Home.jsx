import "../styles/Home.scss";
import Card from "../components/Card";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="body">
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
