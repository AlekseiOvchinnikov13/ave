'use client';
import styles from './Screen10.module.scss';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import Background from '../../Background';
import BgScreen10 from '../../../../../../public/images/backgrounds/bg-screen10.jpg';
import PageTitle from '../../PageTitle';
import Paragraph from '../../Paragraph';
import {speakers} from '../../../../../data/speakers';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import uuid from 'react-uuid';
import {colorWhite} from '../../../../styles/variables.module.scss';
import {useState} from 'react';

const Screen10 = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(speakers[0]);
  const onClickHandler = name => {
    setActiveSpeaker(speakers.find(speaker => speaker.name.label === name));
  };

  return (
    <SectionContainer>
      <Background
        src={BgScreen10}
        alt={'background10'}
      />
      <ContentContainer className={styles.container}>
        <PageTitle text={'спикеры'} className={styles.title}/>
        <div className={styles.speakers}>
          <Paragraph> Кликни, чтобы узнать больше про остальных</Paragraph>
          <div className={styles.speakerImageWrapper}>
            {speakers.map(speaker =>
              <motion.button
                className={styles.speakerImage}
                key={uuid()}
                initial={{borderColor: activeSpeaker?.name?.label === speaker.name.label ? speaker.name.color : colorWhite}}
                whileHover={{scale: 1.1}}
                transition={{ease: 'easeInOut', duration: .3}}
                onClick={() => onClickHandler(speaker.name.label)}
              >
                <Image
                  src={speaker.srcSmall}
                  alt={speaker.name.label}
                  fill
                />
              </motion.button>
            )}
          </div>
          <div className={styles.info}>
            <h5 style={{color: activeSpeaker?.name?.color}}>
              {activeSpeaker?.name?.label}
            </h5>
            <div className={styles.description}>
              {activeSpeaker?.description?.map(p =>
                <Paragraph key={uuid()}>{p}</Paragraph>
              )}
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen10;