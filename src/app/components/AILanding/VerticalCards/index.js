import styles from './VerticalCards.module.scss';
import {verticalCards} from '../../../../data/verticalCards';
import uuid from 'react-uuid';
import VerticalCard from '../VerticalCard';

const VerticalCards = () => {
  return (
    <div className={styles.cardsContainer}>
      {verticalCards.slice(0, 4).map(cardData =>
        <VerticalCard data={cardData} key={uuid()}/>
      )}
    </div>
  );
};

export default VerticalCards;