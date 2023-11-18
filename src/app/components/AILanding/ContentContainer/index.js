import styles from './ContentContainer.module.scss';

const ContentContainer = ({children, className}) => {
  return (
    <div className={`${styles.contentContainer} ${className}`}>
      {children}
    </div>
  );
};

export default ContentContainer;