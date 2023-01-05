import './styles.css';
import CarImg from 'assets/images/car-card 1.png';
import ButtonCompra from 'components/ButtonCompra';

const CarCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-top-container">
        <img src={CarImg} alt="Nome do carro" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <div className="card-text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </span>
          <ButtonCompra />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
