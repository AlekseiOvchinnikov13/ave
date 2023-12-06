'use client';
import styles from './Screen9.module.scss';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import PageTitle from '../../PageTitle';
import Paragraph from '../../Paragraph';
import VerticalCards from '../../VerticalCards';
// import {motion, useTransform, useScroll} from 'framer-motion';

const Screen9 = () => {


  return (
    <SectionContainer className={styles.container}>
      <ContentContainer className={styles.stickyContainer}>
        <div className={styles.scrollSection}>
          <div className={styles.wrapper}>
            <PageTitle text={'что вас ждет на учебном потоке'}/>
            <div className={styles.description}>
              <Paragraph>Какие нейросети будут:</Paragraph>
              <ul>
                <li>Stable Diffusion;</li>
                <li>Midjourney;</li>
                <li>Adobe PHOTOSHOP Firefly;</li>
                <li>Runway Gen-1, 2;</li>
                <li>и прочее.</li>
              </ul>
            </div>
            <VerticalCards/>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen9;


/*
<PageTitle text={'что вас ждет на учебном потоке'}/>
<div className={styles.description}>
  <Paragraph>Какие нейросети будут:</Paragraph>
  <ul>
    <li>Stable Diffusion;</li>
    <li>Midjourney;</li>
    <li>Adobe PHOTOSHOP Firefly;</li>
    <li>Runway Gen-1, 2;</li>
    <li>и прочее.</li>
  </ul>
</div>*/
