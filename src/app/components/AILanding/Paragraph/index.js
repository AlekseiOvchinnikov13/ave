import styles from './Paragraph.module.scss';

const Paragraph = ({children, innerHTML}) => {
  return (
    <p
      className={styles.paragraph}
      dangerouslySetInnerHTML={{__html: children ? children : innerHTML}}
    />
  );
};

export default Paragraph;