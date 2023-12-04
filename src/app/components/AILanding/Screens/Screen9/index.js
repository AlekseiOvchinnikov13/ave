import styles from './Screen9.module.scss';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import PageTitle from '../../PageTitle';
import Paragraph from '../../Paragraph';
import VerticalCards from '../../VerticalCards';

const Screen9 = () => {

  return (
    <SectionContainer>
      <ContentContainer className={styles.container}>
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
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen9;