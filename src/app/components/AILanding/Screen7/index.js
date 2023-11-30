import styles from './Screen7.module.scss';
import Background from '../Background';
import BgScreen7 from '../../../../../public/images/backgrounds/bg-screen7.jpg';
import SectionContainer from '../SectionContainer';
import ContentContainer from '../ContentContainer';
import Paragraph from '../Paragraph';

const Screen7 = () => {

  return (
    <SectionContainer>
      <Background
        src={BgScreen7}
        alt={'background7'}
      />
      <ContentContainer className={styles.container}>
        <div className={styles.description}>
          <h5>
            создание изображений и&nbsp;персонажей на&nbsp;основе <span>собственных дизайнов</span>, концептов
            и&nbsp;фотографий
          </h5>
          <Paragraph>
            Сейчас в&nbsp;индустрии принято работать с&nbsp;собственными изображениями и&nbsp;персонажами, чтобы это
            не&nbsp;вызывало проблем с&nbsp;плагиатом. <strong>Нейросети позволяют создавать контент с&nbsp;собственными
            маскотами и&nbsp;стилями</strong>, что помогает развивать личный бренд и&nbsp;сохранять экологичность
            в&nbsp;индустрии.
          </Paragraph>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen7;