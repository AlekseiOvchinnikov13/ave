import styles from './Screen6.module.scss';
import BgScreen6 from '../../../../../public/images/backgrounds/bg-screen6.jpg';
import Background from '../Background';
import SectionContainer from '../SectionContainer';
import ContentContainer from '../ContentContainer';


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
            <p>Никогда еще не&nbsp;было так комфортно и&nbsp;вариативно работать с&nbsp;изображением, как сейчас.</p>
            <p>
              <span>Теперь у&nbsp;тебя есть дополнительный инструмент</span> для <span>достижения результата.</span>
            </p>
            <p>
              Работа с&nbsp;текстурой, корректировка и&nbsp;видоизменение элементов, работа
              с&nbsp;бэкграундом&nbsp;&mdash; <span>все это открывает для тебя новые возможности.</span>
            </p>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen6;