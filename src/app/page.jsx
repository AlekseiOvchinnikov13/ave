'use client';
import styles from './page.module.css';
import ReactPageScroller from 'react-page-scroller';
import Screen1 from './components/AILanding/Screen1';

export default function AILanding() {
  return (
    <main className={styles.main}>
      <ReactPageScroller>
        <Screen1/>
        <Screen1/>
        <Screen1/>
      </ReactPageScroller>
    </main>
  );
}
