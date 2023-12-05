import {colorWhite, colorRed, colorPurple, colorCyan} from '../app/styles/variables.module.scss';
import SpeakerSmall1 from '../../public/images/characters/speakers/speakerSmall1.jpg';
import SpeakerSmall2 from '../../public/images/characters/speakers/speakerSmall2.jpg';
import SpeakerSmall3 from '../../public/images/characters/speakers/speakerSmall3.jpg';
import SpeakerSmall4 from '../../public/images/characters/speakers/speakerSmall4.jpg';

import Speaker1 from '../../public/images/characters/speakers/speaker1.png';
import Speaker2 from '../../public/images/characters/speakers/speaker2.png';
import Speaker3 from '../../public/images/characters/speakers/speaker3.png';
import Speaker4 from '../../public/images/characters/speakers/speaker4.png';


export const speakers = [
  {
    name: {
      label: 'senshi repin',
      color: colorRed
    },
    description: [
      'Арт-директор, фотограф, диджитал-художник, основатель бренда AVE',
      'Действующий специалист в&nbsp;индустрии с&nbsp;художественным образованием.',
      'Сотрудничал с&nbsp;Adidas, Sony и&nbsp;другими крупными брендами, известными мировыми артистами.'
    ],
    src: Speaker1,
    srcStyles: {
      width: '.58125em',
      height: '.5618em'
    },
    srcSmall: SpeakerSmall1,
    phrase: 'ебашь или умри'
  },
  {
    name: {
      label: 'ARTEMSKIY',
      color: colorPurple
    },
    description: [
      'Фотограф, главный промт-инженер',
      'Благодаря нейронным сетям открыл для себя новые возможности в&nbsp;работе с&nbsp;артами, что позволило ему начать сотрудничество с&nbsp;AVE WARRIORS'
    ],
    src: Speaker2,
    srcStyles: {
      width: '.43125em',
      height: '.56041em'
    },
    srcSmall: SpeakerSmall2,
    phrase: 'ебашь или умри'
  },
  {
    name: {
      label: 'WHISP',
      color: colorWhite
    },
    description: [
      'арт-директор, Диджитал-художник, художник-анимации.',
      'Использует нейросети для коммерции и&nbsp;творчества.',
      'В&nbsp;основном midjourney для создания концептов, бэкграундов, 3d.'
    ],
    src: Speaker3,
    srcStyles: {
      width: '.54652em',
      height: '.5625em'
    },
    srcSmall: SpeakerSmall3,
    phrase: 'ебашь или умри'
  },
  {
    name: {
      label: 'CIIz',
      color: colorCyan
    },
    description: [
      'Куратор курсов AVE EDUCATION, Фотограф, ретушёр, дизайнер.',
      'Стабильно применяет нейросети во&nbsp;время обработки своих работ. Отлично эрудированный специалист, способный вам объяснить за&nbsp;устройство нейронных сетей.'
    ],
    src: Speaker4,
    srcStyles: {
      width: '.54444em',
      height: '.5625em'
    },
    srcSmall: SpeakerSmall4,
    phrase: 'цу'
  }
];