import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="footer-all">
        <div className="footer-container">
          <div className="my-info-block">
            <a href="https://github.com/IrinaIID" className="link-my-github">IrinaIID</a>
            <p className="p-year">2023</p>
          </div>
          <a href="https://rs.school/react/" className="link-course">React course RS SChool</a>
        </div>
      </div>
    );
  }
}
