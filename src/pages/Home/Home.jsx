import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel></Carousel>
      </div>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
