import Header from '../../components/heder/header';
import React from 'react';
import Footer from '../../components/footer/footer';
import './main-page.scss'
import SearchForm from '../../components/search-form/search-form';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-all">
        <Header />
        <div className="main">
          <div className="search-block">
            <SearchForm text="" />
          </div>
          <div className="cards-block">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
