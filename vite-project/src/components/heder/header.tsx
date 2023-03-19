import React from 'react';
import DecoratioHeader from './decoration-header';
import './header.scss';
import NavigationHeader from './navigation-header';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-all">
        <div className="header-container">
          <NavigationHeader />
          <DecoratioHeader />
        </div>
      </div>
    );
  }
}
