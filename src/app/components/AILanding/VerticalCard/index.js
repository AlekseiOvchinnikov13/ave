import styles from './VerticalCard.module.scss';
import Background from '../Background';
import {fontsize106, fontsize62, fontsize85} from '../../../styles/variables.module.scss';

const VerticalCard = ({data: {src, upText, clickTextColor, title, description, logo, isExpandable, subTitle}}) => {

  return (
    <article className={styles.wrapper}>
      <Background
        src={src}
        alt={title.up + title.bottom}
      />
      {isExpandable
        ? <div className={styles.clickText} style={{color: clickTextColor}}>
          Нажми, чтобы посмотреть
          <div className={styles.triangle}/>
        </div>
        : <div className={styles.logoWrapper}>

        </div>
      }
      <div className={styles.textWrapper}>
        <h5
          className={styles.upText}
          style={{
            background: upText.background,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {upText.text}
        </h5>

        {subTitle &&
          <h6 className={styles.subTitle}>{subTitle}</h6>
        }
        <h3
          className={styles.titleUp}
          style={{
            background: title.backgroundPrimary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: title.isUpBig ? fontsize106 : title.isUpSmall ? fontsize62 : fontsize85
          }}
        >
          {title.up}
        </h3>

        <h2
          className={styles.titleBottom}
          dangerouslySetInnerHTML={{__html: title.bottom}}
          style={{
            background: title.backgroundSecondary,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: title.isBottomBig ? fontsize106 : title.isBottomSmall ? fontsize62 : fontsize85
          }}
        />

        <p
          className={styles.description}
          style={{color: description.color}}
          dangerouslySetInnerHTML={{__html: description.text}}
        />
      </div>
    </article>
  );
};

export default VerticalCard;