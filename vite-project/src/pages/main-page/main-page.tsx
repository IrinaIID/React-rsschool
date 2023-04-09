import Header from '../../components/heder/header';
import Footer from '../../components/footer/footer';
import './main-page.scss';
import SearchForm from '../../components/search-form/search-form';
import ApiCards from '../../components/api-cards/api-cards';
import { useEffect, useState } from 'react';
import ModalCard from '../../components/modal-card/modal-card';
import { baseURL } from '../../utils/const/const';
import { ApiInfo } from '../../utils/types/types';

export default function MainPage() {
  const [urlSearch, setUrlSearch] = useState('');
  const [cardsInfo, setCardsInfo] = useState<ApiInfo[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [numCard, setNumCard] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let url = baseURL;
    if (urlSearch !== '') {
      url = `${baseURL}?name=${urlSearch}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCardsInfo(data.results);
        setIsLoading(false);
      });
  }, [urlSearch]);

  return (
    <div className="main-page-all">
      {isModal && cardsInfo && <ModalCard isModal={setIsModal} modalId={numCard} />}
      <Header />
      <div className="main">
        <div className="search-block">
          <SearchForm setUrlForm={setUrlSearch} />
        </div>
        <div className="cards-block">
          {isLoading && <p className="p-loading">Loading...</p>}
          {!cardsInfo && <p className="p-no-results">Not found</p>}
          {cardsInfo &&
            cardsInfo.map((card) => {
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
