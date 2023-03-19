import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/const/const';
import './header.scss';

export default class NavigationHeader extends React.Component {
  render() {
    return (
      <div className="navigation-header-all">
        <div className="block-nav block-nav-main">
          <Link to={ROUTES.main}>
            <p className="p-link-nav">main</p>
          </Link>
        </div>
        <div className="block-nav">
          <Link to={ROUTES.about}>
            <p className="p-link-nav">about us</p>
          </Link>
        </div>
      </div>
    );
  }
}
