import Header from "../components/Header";
import { Menu } from "../components/Menu";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Home;
