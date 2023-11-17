'use client';
import styles from './Screen2.module.scss';
import Background from '../Background';
import BgScreen2 from '../../../../../public/images/backgrounds/bg-screen2.jpg';

const Screen2 = () => {

  return (
    <section className={`${styles.wrapper} container`}>
      <Background
        src={BgScreen2}
        alt={'background1'}
      />
    </section>
  );
};

export default Screen2;