'use client';
import styles from './Screen1.module.scss';
import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';
import Background from '../Background';
import BgScreen1 from '../../../../../public/images/backgrounds/bg-screen1.jpg';
import {Button} from 'antd';
import Timer from '../Timer';
import ContentContainer from '../ContentContainer';
import SectionContainer from '../SectionContainer';
import PageTitle from '../PageTitle';

const Screen1 = () => { //setActivePage
  const [isModalVisible, setIsModalVisible] = useState(true);
  const goHandle = () => {
    setIsModalVisible(false);
    // setActivePage(1);
  };

  return (
    <SectionContainer className={`${styles.wrapper} ${isModalVisible ? styles.wrapperShadow : ''}`}>
      <Background
        src={BgScreen1}
        alt={'background1'}
      />

      <ContentContainer>
        {!isModalVisible &&
          <div className={styles.content}>
            <motion.div
              className={styles.description}
              transition={{ease: 'easeInOut', duration: 1}}
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
            >
              <h3>кому это подойдет</h3>
              <p>
                <strong>Абсолютно каждому</strong>, будь ты&nbsp;диджитал-художником или работягой с&nbsp;завода.
              </p>
              <p>Всем, кто стремится оставаться в&nbsp;курсе последних тенденций, хочет развивать свои навыки, улучшить
                и&nbsp;ускорить свой рабочий процесс. Каждому, кто хочет найти ответы на&nbsp;важные вопросы,
                погрузиться
                в&nbsp;мир нейронных сетей, да&nbsp;и&nbsp;просто научиться новому.</p>
              <p><strong>Уровень скилла не&nbsp;имеет значения.</strong></p>
            </motion.div>

            <motion.div
              className={styles.mainTitle}
              transition={{ease: 'easeInOut', duration: 1.5}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
            >
              <div className={styles.title}>
                <p>ai</p>
                <h1>искусство <br/> без границ</h1>
              </div>
              <h6>синтез искусства и технологий</h6>
            </motion.div>

            <Timer className={styles.timer}/>
          </div>
        }

        <AnimatePresence>
          {isModalVisible &&
            <motion.div
              className={styles.block}
              animate={{opacity: 1, y: 0}}
              transition={{ease: 'easeInOut', duration: 1}}
              initial={{opacity: 0, y: 500}}
              exit={{opacity: 0, y: -500, position: 'absolute'}}
            >
              <PageTitle className={styles.title} text={'внимание'}/>
              <p>Курс создан не&nbsp;рандомными людьми или блогерами живущих ради наживы, <strong>Это обучение
                разработала
                команда, которая более 5&nbsp;лет работает с&nbsp;крупными брендами и&nbsp;известными
                артистами.</strong>
              </p>
              <p>Сразу&nbsp;&mdash; Кнопки &laquo;Пиздато&raquo; не&nbsp;существует, как
                и&nbsp;AI&nbsp;&mdash; не&nbsp;панацея, или полноценная замена, но&nbsp;отличный инструмент для твоего
                фундамента в&nbsp;профессии.</p>
              <p>Если ты&nbsp;готов превозмогать, учиться и&nbsp;не&nbsp;искать себе оправданий, то&nbsp;найдешь ответы
                на&nbsp;многие вопросы.</p>
              <Button className={styles.buttonGo} onClick={goHandle}>погнали</Button>
            </motion.div>}
        </AnimatePresence>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen1;