import { CARDS_INFO } from '../../data/cards-info';
import React from 'react';
import './card.scss'


interface DefaultProps {
  picture: string
  name: string
  year: string
}
interface Props extends DefaultProps {}

export default class Card extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    props.picture
  }

  render() {
    return (
      <div className="card-all">
        <div className="img-card-block">
          <img src={this.props.picture} alt="card" />
        </div>
        <div className="description-card-block">
          <div className="description-info">
            <p className="p-info">{`name: ${this.props.name}`}</p>
            <p className="p-info">{`year: ${this.props.year}`}</p>
          </div>
          <button className="btn-card">choose</button>
        </div>
      </div>
    );
  }
}