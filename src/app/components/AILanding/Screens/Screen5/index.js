import Background from '../../Background';
import BgScreen5 from '../../../../../../public/images/backgrounds/bg-screen5.jpg';
import SectionContainer from '../../SectionContainer';
import ContentContainer from '../../ContentContainer';
import styles from './Screen5.module.scss';
import Paragraph from '../../Paragraph';

const Screen5 = () => {
  return (
    <SectionContainer>
      <Background
        src={BgScreen5}
        alt={'background5'}
      />
      <ContentContainer className={styles.container}>
        <div className={styles.example}>
          <h3>Немного наших примеров</h3>
          <Paragraph innerHTML={`То, что раньше приходилось долго и&nbsp;сложно делать в&nbsp;3D&nbsp;и&nbsp;рендерить, снимать,
            подрисовывать,<strong> теперь можно создавать гораздо быстрее с&nbsp;помощью нейросетей:</strong> создание
            текстур, элементов дизайна, имитация воды на&nbsp;фото, бэкграунды, даже части тела.`}/>
          <Paragraph innerHTML={`<strong>Нейросети&nbsp;&mdash; не&nbsp;панацея,</strong> не&nbsp;нужно перечеркивать все свои навыки
            и&nbsp;думать, что искусственный интеллект их&nbsp;полностью заменит. Наоборот, все твои навыки, знания
            и&nbsp;ресурсы только помогут использовать&nbsp;AI наиболее грамотно.`}/>
          <Paragraph innerHTML={`Теперь<strong> ты&nbsp;сможешь выбирать, когда тебе удобнее и&nbsp;быстрее применить в&nbsp;работе
            нейросети,</strong> когда&nbsp;&mdash; сделать снимок, а&nbsp;когда прибегнуть к&nbsp;помощи 3D.`}/>
          <Paragraph
            innerHTML={'<strong>Это просто альтернативный инструмент, который можно и&nbsp;нужно миксовать с&nbsp;другими.</strong>'}/>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen5;