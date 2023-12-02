'use client';
import styles from './page.module.scss';
import Screen1 from './components/AILanding/Screen1';
import Screen2 from './components/AILanding/Screen2';
import Screen5 from './components/AILanding/Screen5';
import Screen3 from './components/AILanding/Screen3';
import Screen6 from './components/AILanding/Screen6';
import Screen7 from './components/AILanding/Screen7';
import Screen8 from './components/AILanding/Screen8';

export default function AILanding() {
  return (
    <main className={styles.main}>
      <Screen1/>
      <Screen2/>
      <Screen3/>
      <Screen5/>
      <Screen6/>
      <Screen7/>
      <Screen8/>
    </main>
  );
}
