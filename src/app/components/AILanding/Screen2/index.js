import styles from './Screen2.module.scss';
import Background from '../Background';
import BgScreen2 from '../../../../../public/images/backgrounds/bg-screen2.png';
import Chibik from '../../../../../public/images/chibiks/chibik-pain.png';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {words} from '../../../../data/words';
import WordOfPain from '../WordOfPain';
import uuid from 'react-uuid';
import SectionContainer from '../SectionContainer';
import ContentContainer from '../ContentContainer';

const Screen2 = () => {

  return (
    <SectionContainer>
      <Background
        src={BgScreen2}
        alt={'background2'}
        quality={50}
      />
      <ContentContainer>
        <div className={styles.wordsContainer}>
          <motion.div
            className={styles.chibikWrapper}
            initial={{y: -200}}
            whileInView={{y: 0, rotate: 360}}
            transition={{ease: 'easeInOut', duration: 1.2, type: 'spring'}}
            // viewport={{once: true}}
          >
            <Image
              src={Chibik}
              alt={'Chibik'}
              fill
              style={{objectFit: 'cover'}}
            />
          </motion.div>
          {words.map((word, index) =>
            <WordOfPain
              key={uuid()}
              word={word.text}
              className={`word${index}`}
              rotate={word.rotate}
            />
          )}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};


export default Screen2;