'use client';
import styles from './Screen3.module.scss';
import Background from '../Background';
import BgScreen1 from '../../../../../public/images/backgrounds/bg-screen1.jpg';

const Screen3 = () => {

  return (
    <section className={`${styles.wrapper} container`}>
      <Background
        src={BgScreen1}
        alt={'background1'}
      />
    </section>
  );
};

export default Screen3;