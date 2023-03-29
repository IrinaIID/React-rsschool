import Footer from '../../components/footer/footer';
import Header from '../../components/heder/header';
import React from 'react';
import './about-page.scss';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="page-about-all">
        <Header />
        <div className="about-main-block">
          <div className="main-container-about">
            <h1 className="h1-about">About page</h1>
            <p className="p-about">About page for the RS-project / course React</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
