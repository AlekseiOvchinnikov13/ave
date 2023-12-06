import styles from './WordOfPain.module.scss';
import './style.scss';
import {motion} from 'framer-motion';

const WordOfPain = ({word, rotate, className}) => {
  const jellyMotion = {
    whileHover: {
      scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
      rotate: rotate,
      transition: {
        duration: 0.6,
      },
    }
  };

  return (
    <motion.p
      className={`${styles.word} ${className}`}
      variants={jellyMotion}
      initial={{rotate: rotate}}
      whileHover="whileHover"
      dangerouslySetInnerHTML={{__html: word}}
    />
  );
};


export default WordOfPain;