import Card from '../../components/card/card';
import './api-cards.scss';

interface ApiCard {
  picture: string
  name: string
  species: string
}

export default function ApiCards(cardsInfo: ApiCard) {

  return (
    <div className="card-all">
      <div className="img-card-block">
        <img src={cardsInfo.picture} alt="card" className="img-item" />
      </div>
      <div className="description-card-block">
        <div className="description-info">
          <p className="p-info">{`name: ${cardsInfo.name}`}</p>
          <p className="p-info">{`species: ${cardsInfo.species}`}</p>
        </div>
        <button className="btn-card">choose</button>
      </div>
    </div>
  )
}