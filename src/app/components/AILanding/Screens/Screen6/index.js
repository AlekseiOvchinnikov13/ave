import styles from './Screen6.module.scss';
import BgScreen6 from '../../../../../../public/images/backgrounds/bg-screen6.jpg';
import Background from '../../Background';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import Paragraph from '../../Paragraph';


const Screen6 = () => {

  return (
    <SectionContainer>
      <Background
        src={BgScreen6}
        alt={'background6'}
      />
      <ContentContainer className={styles.container}>
        <div className={styles.textContainer}>
          <h5>Работа с деталями и окружением</h5>
          <div className={styles.description}>
            <Paragraph>
              Никогда еще не&nbsp;было так комфортно и&nbsp;вариативно работать с&nbsp;изображением, как сейчас.
            </Paragraph>
            <Paragraph
              innerHTML={`<strong>Теперь у&nbsp;тебя есть дополнительный инструмент</strong> для <strong>достижения результата.</strong>`}/>
            <Paragraph innerHTML={`Работа с&nbsp;текстурой, корректировка и&nbsp;видоизменение элементов, работа
              с&nbsp;бэкграундом&nbsp;&mdash; <strong>все это открывает для тебя новые возможности.</strong>`}/>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen6;