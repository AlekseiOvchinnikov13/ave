'use client';
import styles from './VerticalCard.module.scss';
import Background from '../Background';
import {
  fontsize106, fontsize62, fontsize85,
  fontsize48, fontsize80, colorGrey5
} from '../../../styles/variables.module.scss';
import Image from 'next/image';
import {useState} from 'react';
import uuid from 'react-uuid';
import {AnimatePresence, motion} from 'framer-motion';

const VerticalCard = ({
  data: {
    src,
    upText,
    clickTextColor,
    title,
    description,
    logo,
    isExpandable,
    subTitle,
    subTitleColor,
    cards
  },
  initial,
  animate,
  exit
}) => {

  const [isExpand, setIsExpand] = useState(false);
  const expandHandler = () => {
    setIsExpand(!isExpand);
  };

  const style = {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const Content =
    <>
      <Background
        src={src}
        alt={title.up + title.bottom}
      />
      {isExpandable
        ? <>
          <div className={styles.clickText} style={{color: clickTextColor}}>
            Нажми, чтобы посмотреть
            <div className={styles.triangle}/>
          </div>
          <AnimatePresence>
            {isExpand &&
              <motion.div
                className={styles.clickTextExpand}
                initial={{opacity: 0, y: -300, translateX: '-50%', translateY: '-50%'}}
                animate={{opacity: 1, y: 0, translateX: '-50%', translateY: '-50%'}}
                exit={{opacity: 0, y: 300, translateX: '-50%', translateY: '-50%'}}
                transition={{ease: 'easeInOut', duration: .4}}
              >
                Нажми, чтобы свернуть
                <div className={styles.triangle}/>
              </motion.div>}
          </AnimatePresence>
        </>
        : <div
          className={styles.logoWrapper}
          style={{alignSelf: logo.position}}
        >
          <div
            className={styles.logo}
            style={{width: logo.width, height: logo.height}}
          >
            <Image src={logo.src} alt={logo.label} fill/>
          </div>
          <p
            className={styles.text}
            style={{color: logo.color}}
          >
            {logo.label}
          </p>
        </div>
      }
      <div className={styles.textWrapper}>
        <h5
          className={styles.upText}
          style={{
            background: upText.background,
            ...style
          }}
        >
          {upText.text}
        </h5>

        {subTitle &&
          <h6
            className={styles.subTitle}
            style={{color: subTitleColor ? subTitleColor : colorGrey5}}
          >
            {subTitle}
          </h6>
        }
        <div className={`${styles.titles} ${title.left ? styles.titlesExtra : ''}`}>
          <h3
            className={styles.titleUp}
            style={{
              background: title.backgroundPrimary,
              ...style,
              fontSize: title.isUpBig
                ? fontsize106
                : title.isUpSmall
                  ? fontsize62
                  : title.isBothMiddle
                    ? fontsize80
                    : fontsize85
            }}
          >
            {title.up}
          </h3>
          {title.left &&
            <h4
              className={styles.titleLeft}
              style={{
                background: title.backgroundLeft,
                ...style
              }}
            >
              {title.left}
            </h4>
          }
          <h2
            className={styles.titleBottom}
            dangerouslySetInnerHTML={{__html: title.bottom}}
            style={{
              background: title.backgroundSecondary,
              ...style,
              fontSize: title.isBottomBig
                ? fontsize106
                : title.isBottomSmall
                  ? fontsize62
                  : title.isBottomExtraSmall
                    ? fontsize48
                    : title.isBothMiddle
                      ? fontsize80
                      : fontsize85
            }}
          />
        </div>
        <p
          className={styles.description}
          style={{color: description?.color}}
          dangerouslySetInnerHTML={{__html: description?.text}}
        />
      </div>
    </>;


  return (
    <>
      {isExpandable
        ? <motion.button
          className={`${styles.wrapperButton} ${isExpand ? styles.wrapperButtonExpand : ''}`}
          onClick={expandHandler}
          whileHover={{scale: .98}}
          whileTap={{}}
          transition={{ease: 'easeInOut', duration: .3}}
          layout
        >
          {Content}
        </motion.button>
        : <motion.article
          className={styles.wrapper}
          initial={initial}
          animate={animate}
          exit={exit}
        >
          {Content}
        </motion.article>
      }
      <AnimatePresence>
        {isExpand && isExpandable &&
          cards.map(card =>
            <VerticalCard
              data={card}
              key={uuid()}
              initial={{opacity: 0, x: -300}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: -600}}
              transition={{ease: 'easeInOut', duration: .3}}
            />
          )}
      </AnimatePresence>
    </>
  );
};

export default VerticalCard;