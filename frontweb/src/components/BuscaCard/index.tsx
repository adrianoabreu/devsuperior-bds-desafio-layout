import './styles.css';
import ButtonBusca from 'components/ButtonBusca';

const BuscaCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-busca">
        <div>
          <input type="text" placeholder="Digite sua busca" />
        </div>
        <div className="btn-button">
          <ButtonBusca />
        </div>
      </div>
    </div>
  );
};

export default BuscaCard;
