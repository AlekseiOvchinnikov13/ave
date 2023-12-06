import styles from './SectionContainer.module.scss';

const SectionContainer = ({children, className}) =>
  <section className={`${styles.section} ${className || ''}`}>
    {children}
  </section>;

export default SectionContainer;
