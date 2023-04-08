import './modal-card.scss';
import CloseImg from '../../assets/img/close.webp'
import { useEffect, useState } from 'react';

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


interface ModalCardProps {
  isModal: (arg: boolean) => void
  modalId: number
}

export default function ModalCard({isModal, modalId}: ModalCardProps) {

  const [cardModal, setCardModal] = useState<ApiInfo>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${modalId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCardModal(data)
      setIsLoading(false)
    })
  },[])

  return (
    <div className="card-modal-all" onClick={() => isModal(false)}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        {isLoading && <p className="p-loading">Loading...</p>}
        {!isLoading && <div> <div className="modal-img-close-block">
          <div className="img-block">
            <img src={cardModal?.image} alt="character" className="img-modal" />
          </div>
          <img src={CloseImg} alt="close" className="img-close"
            onClick={() => isModal(false)}
          />
        </div>
        <div className="modal-description-block">
          <p className="p-info">name: <span className="span-info">{cardModal?.name}</span></p>
          <p className="p-info">status: <span className="span-info">{cardModal?.status}</span></p>
          <p className="p-info">species: <span className="span-info">{cardModal?.species}</span></p>
          <p className="p-info">type: <span className="span-info">{cardModal?.type === '' ? 'unknown' : cardModal?.type}</span></p>
          <p className="p-info">gender: <span className="span-info">{cardModal?.gender}</span></p>
          <p className="p-info">origin: <span className="span-info">{cardModal?.origin.name}</span></p>
        </div> </div>}
      </div>
    </div>
  );
}