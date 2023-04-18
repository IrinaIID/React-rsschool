import { PropsVisitorCard } from '../../utils/types/types';
import './visitor-card.scss';

export default function VisitorCard(props: PropsVisitorCard) {
  return (
    <div className="visitor-card-all">
      <div className="img-card-block">
        <img src={props.picture} alt="card" className="img-visitor-card" />
      </div>
      <div className="description-card-block">
        <div className="description-info">
          <p className="p-info">name: {props.name}</p>
          <p className="p-info">gender: {props.gender}</p>
          <p className="p-info">status: {props.status}</p>
          <p className="p-info">date: {props.date}</p>
          <p className="p-info p-info-public">{props.public}</p>
        </div>
      </div>
    </div>
  );
}
