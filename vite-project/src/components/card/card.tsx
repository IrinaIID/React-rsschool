import { CardProps } from '../../utils/types/types';
import './card.scss';

export default function Card({ picture, name, year }: CardProps) {
  return (
    <div className="card-all">
      <div className="img-card-block">
        <img src={picture} alt="card" />
      </div>
      <div className="description-card-block">
        <div className="description-info">
          <p className="p-info">{`name: ${name}`}</p>
          <p className="p-info">{`year: ${year}`}</p>
        </div>
        <button className="btn-card">choose</button>
      </div>
    </div>
  );
}
