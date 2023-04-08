import Header from '../../components/heder/header';
import Footer from '../../components/footer/footer';
import './main-page.scss';
import SearchForm from '../../components/search-form/search-form';
import ApiCards from '../../components/api-cards/api-cards';
import { useEffect, useState } from 'react';
import ModalCard from '../../components/modal-card/modal-card';

const baseURL = 'https://rickandmortyapi.com/api/character/';

interface ApiInfo {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  },
  location: {
    name: string
    url: string
  },
  image: string
  pisode: string[]
  url: string
  created: string
}

export default function MainPage() {

  const [cardsInfo, setCardsInfo] = useState<ApiInfo[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [numCard, setNumCard] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setCardsInfo(data.results)
        setIsLoading(false)
    })
  },[])

  return (
    <div className="main-page-all">
      {(isModal && cardsInfo) && <ModalCard
        isModal={setIsModal}
        modalId={numCard}
      />}
      <Header />
      <div className="main">
        <div className="search-block">
          <SearchForm />
        </div>
        <div className="cards-block">
          {isLoading && <p className="p-loading">Loading...</p>}
          {cardsInfo && cardsInfo.map(card => {
            console.log(card.id)
            return (
              <ApiCards isModal={setIsModal} numCard={setNumCard} picture={card.image} name={card.name} species={card.species} id={card.id} key={card.id}/>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
