import styles from './VerticalCards.module.scss';
import {verticalCards} from '../../../../data/verticalCards';
import uuid from 'react-uuid';
import VerticalCard from '../VerticalCard';
import {useHorizontalScroll} from '../../../../hooks/useHorizontalScroll';

const VerticalCards = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <div className={styles.cardsContainer} ref={scrollRef}>
      {verticalCards.map(cardData =>
        <VerticalCard data={cardData} key={uuid()}/>
      )}
    </div>
  );
};

export default VerticalCards;