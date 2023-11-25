import styles from './SectionContainer.module.scss';

const SectionContainer = ({children, className}) => {
  return (
    <section className={`${styles.section} ${className ? className : ''}`}>
      {children}
    </section>
  );
};

export default SectionContainer;