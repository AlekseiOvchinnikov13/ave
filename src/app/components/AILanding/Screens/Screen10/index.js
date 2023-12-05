import styles from './Screen10.module.scss';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import Background from '../../Background';
import BgScreen10 from '../../../../../../public/images/backgrounds/bg-screen10.jpg';
import PageTitle from '../../PageTitle';

const Screen10 = () => {

  return (
    <SectionContainer>
      <Background
        src={BgScreen10}
        alt={'background10'}
      />
      <ContentContainer className={styles.container}>
        <PageTitle text={'спикеры'} className={styles.title}/>
        
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen10;