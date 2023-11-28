import styles from './AdvantagesSlider.module.scss';
import {motion, AnimatePresence} from 'framer-motion';
import {imagesAdvantages} from '../../../../data/advantages';
import Image from 'next/image';

const AdvantagesSlider = ({imageIndex}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.imageWrapper}
        key={imageIndex}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: .5, ease: 'easeIn'}}
        style={{zIndex: imagesAdvantages[imageIndex].zIndex}}
      >
        <Image
          src={imagesAdvantages[imageIndex].src}
          fill
          priority
          objectFit={'cover'}
          quality={100}
          alt={`image ${imageIndex}`}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AdvantagesSlider;
