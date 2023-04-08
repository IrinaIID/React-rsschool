import Card from '../../components/card/card';
import './api-cards.scss';

interface ApiCard {
  isModal: (arg: boolean) => void
  numCard: (arg: number) => void
  id: number
  picture: string
  name: string
  species: string
}

export default function ApiCards({isModal, numCard, picture, name, species, id}: ApiCard) {

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
        <button className="btn-card"
          onClick={() => {
            isModal(true);
            numCard(id);
          }
        }>
          choose
        </button>
      </div>
    </div>
  )
}