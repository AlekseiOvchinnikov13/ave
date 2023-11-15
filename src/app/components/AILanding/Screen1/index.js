'use client';
import styles from './Screen1.module.scss';
import { motion } from "framer-motion"
import {Button} from 'antd';
import {useState} from 'react';
// import Background from '../../../../../public/images/backgrounds/bg-screen1.jpg';

const Screen1 = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const goHandle = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.background}>
      {isModalVisible &&
        <motion.div
          className={styles.block}
          animate={{opacity: 1}}
          transition={{ease: 'easeIn', duration: 2.5}}
          initial={{opacity: 0}}
        >
          <h1 className={styles.title}>внимание</h1>
          <p>Курс создан не&nbsp;рандомными людьми или блогерами живущих ради наживы, <strong>Это обучение разработала
            команда, которая более 5&nbsp;лет работает с&nbsp;крупными брендами и&nbsp;известными артистами.</strong>
          </p>
          <p>Сразу&nbsp;&mdash; Кнопки &laquo;Пиздато&raquo; не&nbsp;существует, как
            и&nbsp;AI&nbsp;&mdash; не&nbsp;панацея, или полноценная замена, но&nbsp;отличный инструмент для твоего
            фундамента в&nbsp;профессии.</p>
          <p>Если ты&nbsp;готов превозмогать, учиться и&nbsp;не&nbsp;искать себе оправданий, то&nbsp;найдешь ответы
            на&nbsp;многие вопросы.</p>
          <Button className={styles.buttonGo} onClick={goHandle}>погнали</Button>
        </motion.div>}
    </div>
  );
};

export default Screen1;