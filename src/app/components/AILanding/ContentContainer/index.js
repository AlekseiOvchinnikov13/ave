import styles from './ContentContainer.module.scss';

const ContentContainer = ({children}) => {
  return (
    <div className={styles.contentContainer}>
      {children}
    </div>
  );
};

export default ContentContainer;