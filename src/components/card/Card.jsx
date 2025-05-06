import './Card.css';
import { useContext } from 'react';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { useCardDetail } from '../../Hooks/useCardDetail';
import Button from '../button/Button';
import { AccommodationsContext } from '../../providers/accommodations/AccommodationsProvider';

const Card = ({ src, title, btnText, id, description, ubi, type, name }) => {
  const { dispatch: activitiesDispatch } = useContext(ActivitiesContext);
  const { dispatch: accommodationsDispatch } = useContext(AccommodationsContext);
  const { getCardDetail } = useCardDetail({ getActivity, getAccommodation, activitiesDispatch, accommodationsDispatch, type });
  return (
    <div className="card">
      <div>
        <img src={src} alt={title} width={100} height={100} loading="lazy" />
      </div>
      <h4>{title}</h4>
      <p className="pCard">{ubi}</p>
      <p className="pCard">{description}</p>

      <Button fnc={() => getCardDetail({ id, name: name })} text={btnText} />
    </div>
  );
};

export default Card;
