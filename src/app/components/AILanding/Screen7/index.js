import styles from './Screen7.module.scss';
import Background from '../Background';
import BgScreen7 from '../../../../../public/images/backgrounds/bg-screen7.jpg';
import SectionContainer from '../SectionContainer';
import ContentContainer from '../ContentContainer';
import Paragraph from '../Paragraph';
import Image from 'next/image';
import SenshiBg from '../../../../../public/images/characters/senshi.png';
import {motion} from 'framer-motion';

const Screen7 = () => {

  return (
    <SectionContainer>
      <Background
        src={BgScreen7}
        alt={'background7'}
      />
      <ContentContainer className={styles.container}>
        <motion.div
          className={styles.senshi}
          initial={{rotate: 0}}
          animate={{rotate: [0, 5, 0]}}
          transition={{
            ease: 'easeInOut',
            duration: 1.5,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <Image
            src={SenshiBg}
            alt={'senshi'}
            fill
            style={{objectFit: 'contain'}}
          />
        </motion.div>
        <div className={styles.description}>
          <h5>
            создание изображений и&nbsp;персонажей на&nbsp;основе <span>собственных дизайнов</span>, концептов
            и&nbsp;фотографий
          </h5>
          <Paragraph
            innerHTML={`Сейчас в&nbsp;индустрии принято работать с&nbsp;собственными изображениями и&nbsp;персонажами, чтобы это
            не&nbsp;вызывало проблем с&nbsp;плагиатом. <strong>Нейросети позволяют создавать контент с&nbsp;собственными
            маскотами и&nbsp;стилями</strong>, что помогает развивать личный бренд и&nbsp;сохранять экологичность
            в&nbsp;индустрии.`}
          />
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen7;