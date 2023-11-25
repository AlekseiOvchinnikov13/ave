import {Button} from 'antd';
import styles from './ButtonWithArrow.module.scss';

const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" width="140" height="48" viewBox="0 0 140 48" fill="none">
  <path
    d="M29.4697 24.5303C29.1768 24.2374 29.1768 23.7626 29.4697 23.4697L34.2426 18.6967C34.5355 18.4038 35.0104 18.4038 35.3033 18.6967C35.5962 18.9896 35.5962 19.4645 35.3033 19.7574L31.0607 24L35.3033 28.2426C35.5962 28.5355 35.5962 29.0104 35.3033 29.3033C35.0104 29.5962 34.5355 29.5962 34.2426 29.3033L29.4697 24.5303ZM111 24.75H30V23.25H111V24.75Z"
    fill="white"/>
</svg>;


const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="140" height="48" viewBox="0 0 140 48" fill="none">
  <path
    d="M110.53 24.5303C110.823 24.2374 110.823 23.7626 110.53 23.4697L105.757 18.6967C105.464 18.4038 104.99 18.4038 104.697 18.6967C104.404 18.9896 104.404 19.4645 104.697 19.7574L108.939 24L104.697 28.2426C104.404 28.5355 104.404 29.0104 104.697 29.3033C104.99 29.5962 105.464 29.5962 105.757 29.3033L110.53 24.5303ZM29 24.75H110V23.25H29V24.75Z"
    fill="white"/>
</svg>;

const ButtonWithArrow = ({directionLeft, className, ...other}) => {
  return (
    <Button
      icon={directionLeft ? arrowLeft : arrowRight}
      className={`${styles.button} ${className ? className : ''}`}
      {...other}
    />
  );
};

export default ButtonWithArrow;