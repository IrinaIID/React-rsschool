import Header from '../../components/heder/header';
import Footer from '../../components/footer/footer';
import './main-page.scss';
import SearchForm from '../../components/search-form/search-form';
import ApiCards from '../../components/api-cards/api-cards';
import { useEffect, useState } from 'react';

const baseURL = 'https://rickandmortyapi.com/api/character';

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
  const [cardsInfo, setCardsInfo] = useState<ApiInfo[]>()

  useEffect(() => {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      setCardsInfo(data.results)
    })
  },[])

  return (
    <div className="main-page-all">
      <Header />
      <div className="main">
        <div className="search-block">
          <SearchForm />
        </div>
        <div className="cards-block">
          {cardsInfo && cardsInfo.map(card => {
            return (
              <ApiCards picture={card.image} name={card.name} species={card.species} key={card.id}/>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
