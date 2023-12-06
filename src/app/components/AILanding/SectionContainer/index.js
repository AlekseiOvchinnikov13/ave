import styles from './SectionContainer.module.scss';
import { forwardRef } from 'react';

const SectionContainer = forwardRef(({ children, className }, ref) => {
  return (
    <section className={`${styles.section} ${className || ''}`} ref={ref}>
      {children}
    </section>
  );
});

export default SectionContainer;
