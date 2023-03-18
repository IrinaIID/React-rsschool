import React from 'react';
import './404-page.scss';
import ErrorImg from '../../assets/img/error-img.webp'
import { ROUTES } from '../../utils/const/const';
import { Link } from 'react-router-dom';

export default class Page404 extends React.Component {

  render() {
    return (
      <div className="page-404-all">
        <div className="error-block">
          <h1 className="h1-404">404</h1>
          <img src={ErrorImg} className="img-404" alt="error" />
          <div className="return-links-block">
            <p className="p-404">return to</p>
            <Link to={ROUTES.main}>main</Link>
            <Link to={ROUTES.about}>about</Link>
          </div>
        </div>
      </div>
    );
  }
}
