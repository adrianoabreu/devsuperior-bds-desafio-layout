import Navbar from "components/Navbar";
import CarImage from 'assets/images/car-header.png';
import ButtonIcon from "components/ButtonIcon";
import './styles.css';


const Home = () => {
    return ( 
    <>
      <Navbar/>
      <div className="home-container">
        <div className="home-card">
            <div className="home-content-container">
                <h1>O carro perfeito para você</h1>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
            <div className="home-image-container">
            <img src={CarImage} alt="car-img" />
            </div>
        </div>
        <div className="base-card  home-card-button">
            <div className="home-content-container-btn">
                <ButtonIcon/>
            </div>
        </div>
      </div>
    </>
    );
  }
  
  export default Home;
  