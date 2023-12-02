import styles from './Screen3.module.scss';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import PageTitle from '../../PageTitle';
import Advantages from '../../Advantages';

const Screen3 = () => {
  return (
    <SectionContainer>
      <ContentContainer className={styles.container}>
        <PageTitle text={'чем п*здато наше обучение'} className={styles.title}/>
        <Advantages/>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen3;


