import CarImage from 'assets/images/car-header.png';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={CarImage} alt="car-img" />
        </div>
      </div>
      <div className="base-card  home-card-button">
        <div className="home-content-container-btn">
          <Link to="/cars">
            <ButtonIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
