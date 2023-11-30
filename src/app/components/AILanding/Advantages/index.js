'use client';
import styles from './Advantages.module.scss';
import {colorGrey, colorWhite20} from '../../../styles/variables.module.scss';
import {listAdvantages} from '../../../../data/advantages';
import uuid from 'react-uuid';
import {useEffect, useRef, useState} from 'react';
import ButtonWithArrow from '../ButtonWithArrow';
import AdvantagesSlider from '../AdvantagesSlider';
import Paragraph from '../Paragraph';

const Advantages = () => {
  const [scrollPositionContainer, setScrollPositionContainer] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [isHovered, setIsHovered] = useState({button1: false, button2: false});
  const [activeData, setActiveData] = useState(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = (button) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [button]: true,
    }));
  };

  const handleMouseLeave = (button) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [button]: false,
    }));
  };

  const getActiveData = activeButtonIndex => {
    const activeData = listAdvantages.find((_, index) => index === activeButtonIndex);
    setActiveData(activeData);
  };

  useEffect(() => {
    getActiveData(activeButtonIndex);
  }, [activeButtonIndex]);

  const handleButtonClick = (index) => {
    if (!buttonRef.current || !containerRef.current) return;
    if (index > listAdvantages.length - 1 || index < 0) return;

    const buttonHeight = buttonRef.current.clientHeight;
    const containerHeight = containerRef.current.offsetParent.clientHeight;
    setActiveButtonIndex(index);
    setScrollPosition(index * buttonHeight);

    if (index < 3) {
      setScrollPositionContainer(0);
    } else if (index >= listAdvantages.length - 3) {
      const lastButtonsHeight = buttonHeight * (listAdvantages.length - 3);
      const extraButtonsHeight = (containerHeight / buttonHeight - 3) * buttonHeight;
      setScrollPositionContainer(lastButtonsHeight - extraButtonsHeight);
    } else {
      const middleButtonsHeight = buttonHeight * index;
      const extraButtonsHeight = (containerHeight / buttonHeight / 2) * buttonHeight;
      setScrollPositionContainer(middleButtonsHeight - extraButtonsHeight);
    }
  };

  return (
    <>
      <div className={styles.listContainer}>
        <div
          className={styles.advantagesItemsContainer}
          style={{transform: `translateY(-${scrollPositionContainer}px)`}}
          ref={containerRef}
        >
          {listAdvantages.map((adv, index) =>
            <button
              key={uuid()}
              className={`${styles.advantageItem} adv-button`}
              style={{
                background: activeButtonIndex === index ? adv.background : colorGrey,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              onClick={() => handleButtonClick(index)}
              ref={buttonRef}
            >
              {adv.text}
            </button>
          )}
        </div>
        <div className={styles.scroll}>
          <div
            className={styles.wheel}
            style={{transform: `translate(-50%, ${scrollPosition / 2}px)`}}
          />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.textContainer}>
          {activeData && activeData.description.map(paragraph =>
            <Paragraph key={uuid()} innerHTML={paragraph}/>
          )}
        </div>
        <div className={styles.buttonsContainer}>
          <ButtonWithArrow
            className={styles.button}
            style={{background: isHovered.button1 ? activeData?.background : colorWhite20}}
            onClick={() => handleButtonClick(activeButtonIndex - 1)}
            onMouseEnter={() => handleMouseEnter('button1')}
            onMouseLeave={() => handleMouseLeave('button1')}
            directionLeft
          />
          <Paragraph>{`${activeButtonIndex + 1} / ${listAdvantages.length}`}</Paragraph>
          <ButtonWithArrow
            className={styles.button}
            style={{background: isHovered.button2 ? activeData?.backgroundRight : colorWhite20}}
            onClick={() => handleButtonClick(activeButtonIndex + 1)}
            onMouseEnter={() => handleMouseEnter('button2')}
            onMouseLeave={() => handleMouseLeave('button2')}
          />
        </div>
      </div>
      <AdvantagesSlider imageIndex={activeButtonIndex}/>
    </>
  );
};

export default Advantages;

