'use client';
import styles from './page.module.scss';
import Screen1 from './components/AILanding/Screens/Screen1';
import Screen2 from './components/AILanding/Screens/Screen2';
import Screen5 from './components/AILanding/Screens/Screen5';
import Screen3 from './components/AILanding/Screens/Screen3';
import Screen6 from './components/AILanding/Screens/Screen6';
import Screen7 from './components/AILanding/Screens/Screen7';
import Screen8 from './components/AILanding/Screens/Screen8';
import Screen9 from './components/AILanding/Screens/Screen9';

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
      <Screen9/>
    </main>
  );
}
