import './modal-card.scss';
import CloseImg from '../../assets/img/close.webp';
import { ModalCardProps } from '../../utils/types/types';
import { useGetModalCardQuery } from '../../store/modalApi';

export default function ModalCard({ isModal, modalId }: ModalCardProps) {
  const { data = {}, isLoading } = useGetModalCardQuery(modalId);

  return (
    <div className="card-modal-all" onClick={() => isModal(false)}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        {isLoading && <p className="p-loading">Loading...</p>}
        {!isLoading && (
          <div>
            {' '}
            <div className="modal-img-close-block">
              <div className="img-block">
                <img src={data?.image} alt="character" className="img-modal" />
              </div>
              <img
                src={CloseImg}
                alt="close"
                className="img-close"
                onClick={() => isModal(false)}
              />
            </div>
            <div className="modal-description-block">
              <p className="p-info">
                name: <span className="span-info">{data?.name}</span>
              </p>
              <p className="p-info">
                status: <span className="span-info">{data?.status}</span>
              </p>
              <p className="p-info">
                species: <span className="span-info">{data?.species}</span>
              </p>
              <p className="p-info">
                type:{' '}
                <span className="span-info">{data?.type === '' ? 'unknown' : data?.type}</span>
              </p>
              <p className="p-info">
                gender: <span className="span-info">{data?.gender}</span>
              </p>
              <p className="p-info">
                origin: <span className="span-info">{data?.origin.name}</span>
              </p>
            </div>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
