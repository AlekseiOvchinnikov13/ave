import styles from './Paragraph.module.scss';

const Paragraph = ({children, innerHTML}) => {
  return (
    <p
      className={styles.paragraph}
      dangerouslySetInnerHTML={{__html: innerHTML}}
    >
      {children}
    </p>
  );
};

export default Paragraph;