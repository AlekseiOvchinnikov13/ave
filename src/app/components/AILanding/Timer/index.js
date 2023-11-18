'use client';

import styles from './Timer.module.scss';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';

const Timer = ({className}) => {
  const calculateTimeRemaining = (targetDate) => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
      return `${time.days} д : ${time.hours} ч : ${time.minutes} м`;
    } else {
      return '';
    }
  };

  const targetDate = new Date('2023-11-29T10:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      className={`${styles.timer} ${className}`}
      transition={{ease: 'easeInOut', duration: 1}}
      initial={{opacity: 0, x: 200}}
      animate={{opacity: 1, x: 0}}
    >
      {timeRemaining
        ? <>
          <p>старт потока</p>
          <p className={styles.clock}>{timeRemaining}</p>
        </>
        : <>
          <p className={styles.readyText}>набор открыт</p>
          <a href={'/#rates'}>к тарифам</a>
        </>}
    </motion.div>
  )
    ;

};


export default Timer;