import './styles.css';
import ButtonBusca from 'components/ButtonBusca';

const BuscaCard = () => {
    return (
      <div className="base-card car-card">
        <div className="card-busca">
          <input type="text" placeholder='Digite sua busca'/>
          <ButtonBusca />
        </div>
      </div>
    );
  };
  
  export default BuscaCard;
  