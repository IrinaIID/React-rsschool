import React from 'react';
import './visitor-card.scss'

interface Props {
  name: string | undefined
  date: string | undefined
  status: string | undefined
  gender: string | undefined
  public: string | undefined
  picture: string | undefined
}

export default class VisitorCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="visitor-card-all">
        <div className="img-card-block">
          <img src={this.props.picture} alt="card" className="img-visitor-card" />
        </div>
        <div className="description-card-block">
          <div className="description-info">
            <p className="p-info">name: {this.props.name}</p>
            <p className="p-info">gender: {this.props.gender}</p>
            <p className="p-info">status: {this.props.status}</p>
            <p className="p-info">date: {this.props.date}</p>
            <p className="p-info p-info-public">{this.props.public}</p>
          </div>
        </div>
      </div>
    );
  }
}
