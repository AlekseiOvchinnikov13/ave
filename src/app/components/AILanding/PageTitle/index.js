import styles from './PageTitle.module.scss';

const PageTitle = ({text, className}) =>
  <h6 className={`${styles.title} ${className}`}>
    {text}
  </h6>;

export default PageTitle;
