import { ApiCard } from '../../utils/types/types';
import './api-cards.scss';

export default function ApiCards({ isModal, numCard, picture, name, species, id }: ApiCard) {
  return (
    <div className="card-all">
      <div className="img-card-block">
        <img src={picture} alt="card" className="img-item" />
      </div>
      <div className="description-card-block">
        <div className="description-info">
          <p className="p-info">{`name: ${name}`}</p>
          <p className="p-info">{`species: ${species}`}</p>
        </div>
        <button
          className="btn-card"
          onClick={() => {
            isModal(true);
            numCard(id);
          }}
        >
          choose
        </button>
      </div>
    </div>
  );
}
