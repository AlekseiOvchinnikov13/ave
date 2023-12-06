import styles from './ContentContainer.module.scss';
import {forwardRef} from 'react';

const ContentContainer = forwardRef(({children, className}, ref) => {
  return (
    <div className={`${styles.contentContainer} ${className ? className : ''}`} ref={ref}>
      {children}
    </div>
  );
});

export default ContentContainer;