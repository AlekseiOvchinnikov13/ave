import VertGroup1 from '../../public/images/verticalCards/group/vertical-group1.jpg';
import VertGroup2 from '../../public/images/verticalCards/group/vertical-group2.jpg';
import VertGroup3 from '../../public/images/verticalCards/group/vertical-group3.jpg';
import VertGroup4 from '../../public/images/verticalCards/group/vertical-group4.jpg';
import VertGroup5 from '../../public/images/verticalCards/group/vertical-group5.jpg';
import VertGroup6 from '../../public/images/verticalCards/group/vertical-group6.jpg';

import Card1 from '../../public/images/verticalCards/cards/card1.jpg';
import Card2 from '../../public/images/verticalCards/cards/card2.jpg';
import Card3 from '../../public/images/verticalCards/cards/card3.jpg';
import Card4 from '../../public/images/verticalCards/cards/card4.jpg';
import Card5 from '../../public/images/verticalCards/cards/card5.jpg';
import Card6 from '../../public/images/verticalCards/cards/card6.jpg';
import Card7 from '../../public/images/verticalCards/cards/card7.jpg';
import Card8 from '../../public/images/verticalCards/cards/card8.jpg';
import Card9 from '../../public/images/verticalCards/cards/card9.jpg';
import Card10 from '../../public/images/verticalCards/cards/card10.jpg';
import Card11 from '../../public/images/verticalCards/cards/card11.jpg';
import Card12 from '../../public/images/verticalCards/cards/card12.jpg';

import Telegram from '../../public/images/verticalCards/icons/telegram.png';
import Youtube from '../../public/images/verticalCards/icons/youtube.png';
import AveDark from '../../public/images/verticalCards/icons/ave-black.png';
import AveWhite from '../../public/images/verticalCards/icons/ave-white.png';

import {
  bgCardsColorRed, bgCardsColorBlue, bgCardsColorYellow, bgCardsColorBlack, bgCardsColorRedLight,
  bgCardsColorRedBlue, bgCardsColorWhite1, bgCardsColorWhite2, bgCardsColorWhite3, bgCardsColorPink,
  colorDescriptionCardGrey1, colorDescriptionCardGrey2, colorDescriptionCardGrey3,
  colorDescriptionCardBlack, colorDescriptionCardWhite, colorDescriptionCardGrey4,
  colorClickTextGreyDark, colorClickTextGreyLight, colorDescriptionCardGrey5,
  bgCard1Color1, bgCard1Color2, bgCard2Color1, bgCard2Color2, bgCard2Color3,
  bgCard3Color1, bgCard3Color2, bgCard3Color3, bgCard4Color1, bgCard4Color2,
  bgCard5Color1, bgCard5Color2, bgCard6Color1, bgCard6Color2, bgCard7Color1,
  bgCard7Color2, bgCard8Color1, bgCard8Color2, bgCard9Color1, bgCard9Color2,
  bgCard10Color1, bgCard10Color2, colorDescriptionCardGrey6, colorDescriptionCardGrey7,
  colorDescriptionCardGrey8, colorDescriptionCardGrey9, colorDescriptionCardGreen, colorGrey6,
  colorDescriptionCardYellow, bgCard11Color1, bgCard11Color2, bgCard12Color1, bgCard12Color2, colorGrey5
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
    isExpandable: true,
    cards: [
      {
        src: Card1,
        logo: {
          src: Youtube,
          label: 'YouTube',
          position: 'flex-start',
          color: colorDescriptionCardWhite,
          width: '.02222em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard1Color1,
        },
        subTitle: 'SENSHI REPIN',
        subTitleColor: colorDescriptionCardGrey1,
        title: {
          up: 'искусство',
          left: 'AI',
          bottom: 'без границ',
          backgroundPrimary: bgCard1Color2,
          backgroundSecondary: bgCard1Color2,
          backgroundLeft: bgCard1Color1
        },
        description: {
          text: 'Все подробности о&nbsp;курсе,который откроет новые горизонты развития ваших навыков',
          color: colorDescriptionCardGrey1
        }
      },
      {
        src: Card2,
        logo: {
          src: Youtube,
          label: 'YouTube',
          position: 'flex-start',
          color: colorDescriptionCardBlack,
          width: '.02222em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard2Color1,
        },
        subTitle: 'SENSHI REPIN',
        subTitleColor: colorDescriptionCardGrey5,
        title: {
          isUpSmall: true,
          isBottomBig: true,
          up: 'КАК использовать AI',
          bottom: 'правильно',
          backgroundPrimary: bgCard2Color2,
          backgroundSecondary: bgCard2Color3
        },
        description: {
          text: `Чтобы улучшить свои результаты`,
          color: colorDescriptionCardGrey5
        }
      },
      {
        src: Card3,
        logo: {
          src: Youtube,
          label: 'YouTube',
          position: 'flex-start',
          color: colorDescriptionCardWhite,
          width: '.02222em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard3Color1,
        },
        subTitle: 'Ciiz',
        subTitleColor: colorDescriptionCardWhite,
        title: {
          isUpBig: true,
          isBottomSmall: true,
          up: 'ЭТО БАЗА',
          bottom: 'ГЕНЕРАТИВНЫЙ AI',
          backgroundPrimary: bgCard3Color2,
          backgroundSecondary: bgCard3Color3
        },
        description: {
          text: 'Простым языком',
          color: colorDescriptionCardWhite
        }
      }
    ]
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
    isExpandable: true,
    cards: [
      {
        src: Card4,
        logo: {
          src: AveDark,
          label: 'СТРИМ',
          position: 'flex-start',
          color: colorDescriptionCardBlack,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard4Color1,
        },
        subTitle: 'SENSHI REPIN, ARTEMSKIY',
        subTitleColor: colorDescriptionCardGrey5,
        title: {
          up: 'Способы',
          left: 'AI',
          bottom: 'применения',
          backgroundPrimary: bgCard4Color2,
          backgroundSecondary: bgCard4Color2,
          backgroundLeft: bgCard4Color1
        },
        description: {
          text: `демонстрация всех возможностей, которые мы&nbsp;нашли для улучшения собственных процессов`,
          color: colorDescriptionCardGrey5
        }
      },
      {
        src: Card5,
        logo: {
          src: AveWhite,
          label: 'СТРИМ',
          position: 'flex-start',
          color: colorDescriptionCardWhite,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard5Color1,
        },
        subTitle: 'SENSHI REPIN, ARTEMSKIY',
        subTitleColor: colorGrey6,
        title: {
          isBothMiddle: true,
          up: 'применение',
          left: 'AI',
          bottom: 'на практике',
          backgroundPrimary: bgCard5Color2,
          backgroundSecondary: bgCard5Color2,
          backgroundLeft: bgCard5Color1
        }
      },
      {
        src: Card6,
        logo: {
          src: AveDark,
          label: 'СТРИМ',
          position: 'flex-start',
          color: colorDescriptionCardBlack,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard6Color1,
        },
        subTitle: 'WHISP',
        subTitleColor: colorClickTextGreyDark,
        title: {
          isBothMiddle: true,
          up: 'применение',
          left: 'AI',
          bottom: 'в видео и 3d',
          backgroundPrimary: bgCard6Color2,
          backgroundSecondary: bgCard6Color2,
          backgroundLeft: bgCard6Color1
        }
      }
    ]
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
    isExpandable: true,
    cards: [
      {
        src: Card7,
        logo: {
          src: AveDark,
          label: 'ЛЕКЦИЯ',
          position: 'flex-start',
          color: colorDescriptionCardBlack,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard7Color1,
        },
        subTitle: 'Ciiz',
        subTitleColor: colorDescriptionCardGrey6,
        title: {
          isUpSmall: true,
          isBottomBig: true,
          up: 'что делать, если',
          bottom: 'MAC OS',
          backgroundPrimary: bgCard7Color2,
          backgroundSecondary: bgCard7Color1
        },
        description: {
          text: `альтернативы для слабооснащенных железом&nbsp;пк!`,
          color: colorDescriptionCardGrey6
        }
      },
      {
        src: Card8,
        logo: {
          src: AveWhite,
          label: 'ЛЕКЦИЯ',
          position: 'flex-start',
          color: colorDescriptionCardWhite,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard8Color1,
        },
        subTitle: 'ART3MSKIY',
        subTitleColor: colorDescriptionCardGrey2,
        title: {
          isBothMiddle: true,
          up: 'набор лекций',
          bottom: 'STABLE DIFFUSION ',
          backgroundPrimary: bgCard8Color2,
          backgroundSecondary: bgCard8Color1
        },
        description: {
          text: `объемныи пак из&nbsp;11&nbsp;лекций, полностью объясняющии принцип работы в&nbsp;данном инструменте`,
          color: colorDescriptionCardGrey7
        }
      },
      {
        src: Card9,
        logo: {
          src: AveWhite,
          label: 'ЛЕКЦИЯ',
          position: 'flex-start',
          color: colorDescriptionCardWhite,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard9Color1,
        },
        subTitle: '???',
        subTitleColor: colorDescriptionCardGrey8,
        title: {
          isUpSmall: true,
          isBottomBig: true,
          up: 'НАБОР ЛЕКЦИЙ',
          bottom: 'MIDJOURNEY',
          backgroundPrimary: bgCard9Color2,
          backgroundSecondary: bgCard9Color1
        },
        description: {
          text: 'альтернатива stable diffusion',
          color: colorDescriptionCardGrey8
        }
      },
      {
        src: Card10,
        logo: {
          src: AveDark,
          label: 'ЛЕКЦИЯ',
          position: 'flex-end',
          color: colorDescriptionCardBlack,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard10Color1,
        },
        subTitle: 'SENSHI REPIN',
        subTitleColor: colorGrey5,
        title: {
          isUpSmall: true,
          isBottomBig: true,
          up: 'ADOBE PHOTOSHOP',
          bottom: 'FIRE FLY',
          backgroundPrimary: bgCard10Color2,
          backgroundSecondary: bgCard10Color1
        },
        description: {
          text: `лучшее дополнение к&nbsp;генеративным сетям`,
          color: colorDescriptionCardGrey9
        }
      }
    ]
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
    isExpandable: true,
    cards: [
      {
        src: Card11,
        logo: {
          src: AveWhite,
          label: 'ОБРАТНАЯ СВЯЗЬ',
          position: 'flex-end',
          color: colorDescriptionCardWhite,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard11Color1,
        },
        subTitle: 'все спикеры',
        subTitleColor: colorDescriptionCardGreen,
        title: {
          isUpBig: true,
          isBottomExtraSmall: true,
          up: 'ADVANCED',
          bottom: 'Коллективный созвон',
          backgroundPrimary: bgCard11Color2,
          backgroundSecondary: bgCard11Color1
        },
        description: {
          text: 'Дополнительный стрим, способный закрыть все ваши вопросы',
          color: colorDescriptionCardGreen
        }
      },
      {
        src: Card12,
        logo: {
          src: AveWhite,
          label: 'ОБРАТНАЯ СВЯЗЬ',
          position: 'flex-start',
          color: colorDescriptionCardWhite,
          width: '.01666em',
          height: '.02222em'
        },
        upText: {
          text: 'AVE EDUCATION',
          background: bgCard12Color1,
        },
        subTitle: 'все спикеры',
        subTitleColor: colorDescriptionCardYellow,
        title: {
          isUpBig: true,
          isBottomExtraSmall: true,
          up: 'MENTORSHIP',
          bottom: 'индивидуальные созвоны',
          backgroundPrimary: bgCard12Color2,
          backgroundSecondary: bgCard12Color1
        },
        description: {
          text: `Проведем за&nbsp;руку от&nbsp;а&nbsp;до&nbsp;я`,
          color: colorDescriptionCardYellow
        }
      }
    ]
  },
  {
    src: VertGroup5,
    logo: {
      src: Telegram,
      label: 'TELEGRAM',
      position: 'flex-end',
      color: colorDescriptionCardWhite,
      width: '.02638em',
      height: '.02638em'
    },
    upText: {
      text: 'AVE WARRIORS',
      background: bgCardsColorRedLight,
    },
    subTitle: 'Рабочие кейсы',
    subTitleColor: colorDescriptionCardWhite,
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
      position: 'flex-end',
      color: colorDescriptionCardWhite,
      width: '.02638em',
      height: '.02638em'
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
