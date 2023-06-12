import Header from '../../components/heder/header';
import Footer from '../../components/footer/footer';
import './main-page.scss';
import SearchForm from '../../components/search-form/search-form';
import ApiCards from '../../components/api-cards/api-cards';
import { useState } from 'react';
import ModalCard from '../../components/modal-card/modal-card';
import { ApiInfo } from '../../utils/types/types';
import { useGetCardsMainQuery } from '../../store/cardsMainApi';
import 'isomorphic-fetch';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function MainPage() {
  const textQuery = useSelector((state: RootState) => state.textQuery.textQuery);
  const { data = [], isLoading, error } = useGetCardsMainQuery(textQuery);
  const [isModal, setIsModal] = useState(false);
  const [numCard, setNumCard] = useState(0);

  return (
    <div className="main-page-all">
      {isModal && <ModalCard isModal={setIsModal} modalId={numCard} />}
      <Header />
      <div className="main">
        <div className="search-block">
          <SearchForm />
        </div>
        <div className="cards-block">
          {isLoading && <p className="p-loading">Loading...</p>}
          {error && <p className="p-no-results">Not found</p>}
          {!error &&
            data.results &&
            data.results.map((card: ApiInfo) => {
              return (
                <ApiCards
                  isModal={setIsModal}
                  numCard={setNumCard}
                  picture={card.image}
                  name={card.name}
                  species={card.species}
                  id={card.id}
                  key={card.id}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
