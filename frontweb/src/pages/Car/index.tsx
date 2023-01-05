import CarCard from 'components/CarCard';
import BuscaCard from 'components/BuscaCard';
import Navbar from 'components/Navbar';

const Car = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <BuscaCard/>
      </div>
      <div className="container my-4">
        <CarCard/>
      </div>
    </>
  );
};

export default Car;
