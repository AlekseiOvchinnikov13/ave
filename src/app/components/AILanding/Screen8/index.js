import styles from './Screen8.module.scss';
import Background from '../Background';
import BgScreen8 from '../../../../../public/images/backgrounds/bg-screen8.jpg';
import ContentContainer from '../ContentContainer';
import SectionContainer from '../SectionContainer';

const youtubeLink = 'https://www.youtube.com/embed/FGK6SUWZVwo?si=-9VIp22rLAw86v4c';

const Screen8 = () => {

  return (
    <SectionContainer>
      <Background
        src={BgScreen8}
        alt={'background8'}
      />
      <ContentContainer className={styles.container}>

        <iframe
          className={styles.youtube} src={youtubeLink} title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
        <p className={styles.text}>Поиск и разработка текстур стала намного доступнее и вариативнее.</p>

      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen8;
