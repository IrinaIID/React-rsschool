import Header from '../../components/heder/header';
import React from 'react';
import Footer from '../../components/footer/footer';
import './main-page.scss'
import SearchForm from '../../components/search-form/search-form';
import Card from '../../components/card/card';
import { CARDS_INFO } from '../../data/cards-info';

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
            {CARDS_INFO.map((card) => {
              return (
                <Card picture={card.picture} name={card.name} year={card.year} key={card.id.toString()} />
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
