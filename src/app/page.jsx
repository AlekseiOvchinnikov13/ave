'use client';
import styles from './page.module.scss';
import ReactPageScroller from 'react-page-scroller';
import Screen1 from './components/AILanding/Screen1';
import Screen2 from './components/AILanding/Screen2';
import {useState} from 'react';
import Screen3 from './components/AILanding/Screen3';

export default function AILanding() {
  const [activePage, setActivePage] = useState(0);
  const handlePageChange = number => {
    setActivePage(number);
  };

  return (
    <main className={styles.main}>
      <ReactPageScroller
        customPageNumber={activePage}
        pageOnChange={number => handlePageChange(number)}
      >
        <Screen1 setActivePage={setActivePage}/>
        <Screen2/>
        <Screen3/>
      </ReactPageScroller>
    </main>
  );
}
