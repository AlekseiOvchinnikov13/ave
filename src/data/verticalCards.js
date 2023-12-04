import VertGroup1 from '../../public/images/verticalCards/group/vertical-group1.jpg';
import VertGroup2 from '../../public/images/verticalCards/group/vertical-group2.jpg';
import VertGroup3 from '../../public/images/verticalCards/group/vertical-group3.jpg';
import VertGroup4 from '../../public/images/verticalCards/group/vertical-group4.jpg';
import VertGroup5 from '../../public/images/verticalCards/group/vertical-group5.jpg';
import VertGroup6 from '../../public/images/verticalCards/group/vertical-group6.jpg';
import Telegram from '../../public/images/verticalCards/icons/telegram.png';

import {
  bgCardsColorRed,
  bgCardsColorBlue,
  bgCardsColorYellow,
  bgCardsColorBlack,
  bgCardsColorRedLight,
  bgCardsColorRedBlue,
  bgCardsColorWhite1,
  bgCardsColorWhite2,
  bgCardsColorWhite3,
  bgCardsColorPink,
  colorDescriptionCardGrey1,
  colorDescriptionCardGrey2,
  colorDescriptionCardGrey3,
  colorDescriptionCardBlack,
  colorDescriptionCardWhite,
  colorDescriptionCardGrey4,
  colorClickTextGreyDark,
  colorClickTextGreyLight
} from '../app/styles/variables.module.scss';

export const verticalCards = [
  {
    src: VertGroup1,
    upText: {
      text: 'AVE EDUCATION',
      background: bgCardsColorRed,
    },
    clickTextColor: colorClickTextGreyDark,
    title: {
      up: 'ДОСТУПНО',
      bottom: 'ПРЯМО СЕЙЧАС',
      backgroundPrimary: bgCardsColorWhite1,
      backgroundSecondary: bgCardsColorRed
    },
    description: {
      text: `Все подробности о&nbsp;курсе, что такое нейросети,и как правильно им&nbsp;обучаться`,
      color: colorDescriptionCardGrey1
    },
    isExpandable: true
  },
  {
    src: VertGroup2,
    upText: {
      text: 'AVE EDUCATION',
      background: bgCardsColorBlue,
    },
    clickTextColor: colorClickTextGreyDark,
    title: {
      up: 'Интенсив',
      bottom: `из <span>стримов</span>`,
      backgroundPrimary: bgCardsColorWhite2,
      backgroundSecondary: bgCardsColorBlue
    },
    description: {
      text: `покажем способы применения нейросетей с&nbsp;большим количеством примеров, как в&nbsp;теории, так и&nbsp;на&nbsp;практике`,
      color: colorDescriptionCardGrey2
    },
    isExpandable: true
  },
  {
    src: VertGroup3,
    upText: {
      text: 'AVE EDUCATION',
      background: bgCardsColorYellow,
    },
    clickTextColor: colorClickTextGreyLight,
    title: {
      up: 'ИЗУЧЕНИЕ',
      bottom: 'ИНСТРУМЕНТОВ',
      backgroundPrimary: bgCardsColorWhite3,
      backgroundSecondary: bgCardsColorWhite3
    },
    description: {
      text: `Подробные лекции по&nbsp;инструментам, которые можно смотреть в&nbsp;любом порядке`,
      color: colorDescriptionCardGrey3
    },
    isExpandable: true
  },
  {
    src: VertGroup4,
    upText: {
      text: 'AVE EDUCATION',
      background: bgCardsColorBlack,
    },
    clickTextColor: colorClickTextGreyDark,
    title: {
      isUpSmall: true,
      isBottomBig: true,
      up: 'Дополнительные',
      bottom: 'Созвоны',
      backgroundPrimary: bgCardsColorPink,
      backgroundSecondary: bgCardsColorPink
    },
    description: {
      text: `закроем появившиеся вопросы в&nbsp;процессе обучения`,
      color: colorDescriptionCardBlack
    },
    isExpandable: true
  },
  {
    src: VertGroup5,
    logo: {
      src: Telegram,
      label: 'TELEGRAM',
      position: 'right'
    },
    upText: {
      text: 'AVE WARRIORS',
      background: bgCardsColorRedLight,
    },
    subTitle: 'Рабочие кейсы',
    title: {
      isUpBig: true,
      isBottomSmall: true,
      up: 'ИСПЫТАНИЯ',
      bottom: 'ТВОИХ навыков',
      backgroundPrimary: bgCardsColorRedLight,
      backgroundSecondary: bgCardsColorRedLight
    },
    description: {
      text: `У&nbsp;нас нет домашних заданий, но&nbsp;есть серьезные предложения для тебя`,
      color: colorDescriptionCardWhite,
    }
  },
  {
    src: VertGroup6,
    logo: {
      src: Telegram,
      label: 'TELEGRAM ',
      position: 'right'
    },
    upText: {
      text: 'AVE warriors',
      background: bgCardsColorRedBlue,
    },
    title: {
      isUpSmall: true,
      isBottomBig: true,
      up: 'telegram',
      bottom: 'ai BREAK-IN',
      backgroundPrimary: bgCardsColorWhite3,
      backgroundSecondary: bgCardsColorRedBlue
    },
    description: {
      text: `Доступ в&nbsp;закрытый telegram-канал, где мы&nbsp;продолжим делиться знаниями`,
      color: colorDescriptionCardGrey4,
    }
  }
];


/*
{
  src: VertGroup4,
    logo: {
  src: '',
    label: '',
    position: ''
},
  upText: '',
    subTitle: '',
  title: {
  up: '',
    bottom: ''
},
  description: ' '
}*/
