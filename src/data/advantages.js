import {
  backgroundColorRedLight,
  backgroundColorBlue,
  backgroundColorOrange,
  backgroundColorPink,
  backgroundColorPurple,
  backgroundColorBlue2,
  backgroundColorPurpleLight,
  backgroundColorRed,
  backgroundColorYellow,
  backgroundColorRedLightRight,
  backgroundColorBlueRight,
  backgroundColorOrangeRight,
  backgroundColorPurpleLightRight,
  backgroundColorRedRight,
  backgroundColorYellowRight,
  colorHighlightRedLight,
  colorHighlightBlue,
  colorHighlightYellow,
  colorHighlightPink,
  colorHighlightYellow2,
  colorHighlightBlue2,
  colorHighlightGreen,
  colorHighlightRed,
} from '../app/styles/variables.module.scss';
import Adv1 from '../../public/images/advantages/adv1.png';
import Adv2 from '../../public/images/advantages/adv2.png';
import Adv3 from '../../public/images/advantages/adv3.png';
import Adv4 from '../../public/images/advantages/adv4.png';
import Adv5 from '../../public/images/advantages/adv5.png';
import Adv6 from '../../public/images/advantages/adv6.png';
import Adv7 from '../../public/images/advantages/adv7.png';
import Adv8 from '../../public/images/advantages/adv8.png';
import Adv9 from '../../public/images/advantages/adv5.png';

export const imagesAdvantages = [
  {
    src: Adv1,
    zIndex: 1
  },
  {
    src: Adv2,
    zIndex: -1
  },
  {
    src: Adv3,
    zIndex: 1
  },
  {
    src: Adv4,
    zIndex: -1
  },
  {
    src: Adv5,
    zIndex: 1
  },
  {
    src: Adv6,
    zIndex: 1
  },
  {
    src: Adv7,
    zIndex: 1
  },
  {
    src: Adv8,
    zIndex: -1
  },
  {
    src: Adv9,
    zIndex: 1
  },
];


export const listAdvantages = [
  {
    text: 'понятная теория об AI',
    background: backgroundColorRedLight,
    backgroundRight: backgroundColorRedLightRight,
    description: [
      `Основная <span style="color: ${colorHighlightRedLight}">сложность изучения</span> нейронных сетей&nbsp;&mdash; в&nbsp;их&nbsp;стремительном развитии. <span style="color: ${colorHighlightRedLight}">Мы&nbsp;дадим</span> тебе основы, с&nbsp;которыми ты&nbsp;сможешь адаптироваться под любые изменения.`,
      `мы&nbsp;помножили актуальную информацию на&nbsp;свой практический опыт и&nbsp;соединили все в&nbsp;единую структуру. Результатом стал <span style="color: ${colorHighlightRedLight}">самый полезный курс</span> по&nbsp;AI, который ты&nbsp;сможешь найти.`
    ]
  },
  {
    text: 'много знаний за короткое время ',
    background: backgroundColorBlue,
    backgroundRight: backgroundColorBlueRight,
    description: [
      `Мы&nbsp;построили обучение так, как учимся сами&nbsp;&mdash; <span style="color: ${colorHighlightBlue}">быстро и&nbsp;интенсивно.</span>`,
      `Тебя ждет <span style='color: ${colorHighlightBlue}'>серия стримов</span> с&nbsp;действующими специалистами. После получишь доступ к&nbsp;<span style="color: ${colorHighlightBlue}">записанным лекциям</span> и&nbsp;сможешь самостоятельно выбирать порядок их&nbsp;просмотра.`
    ]
  },
  {
    text: 'подробно об инструментах',
    background: backgroundColorOrange,
    backgroundRight: backgroundColorOrangeRight,
    description: [
      `В&nbsp;курсе подробно разобраны <span style="color: ${colorHighlightYellow}">актуальные приложения</span> и&nbsp;принципы работы с&nbsp;ними. Софта очень много, поэтому выбрали&nbsp;то, что <span style="color: ${colorHighlightYellow}">реально работает</span>. Также расскажем, что делать тем, у&nbsp;кого <span style="color: ${colorHighlightYellow}">слабое железо</span> или <span style="color: ${colorHighlightYellow}">mac OS</span>.`,
      `Все проверено на&nbsp;практике.`,
    ]
  },
  {
    text: 'реальные способы применения ai',
    background: backgroundColorPink,
    backgroundRight: backgroundColorPink,
    description: [
      `<span style="color: ${colorHighlightPink}">МЫ&nbsp;ПОКАЖЕМ</span>, ЧТО НЕЙРОСЕТИ&nbsp;&mdash; ЭТО ВАРИАТИВНЫЙ И&nbsp;ПОЛЕЗНЫЙ ИНСТРУМЕНТ, КОТОРЫЙ МОЖНО ЭФФЕКТИВНО ПРИМЕНЯТЬ НА&nbsp;ПРАКТИКЕ.`,
      `На обучении <span style="color: ${colorHighlightPink}>ты узнаешь:</span>`,
      `<ul>
        <li>как <span style="color: ${colorHighlightPink}">комбинировать AI</span> со своими базовыми навыками и софтом;</li>
        <li><span style="color: ${colorHighlightPink}">увеличить скорость</span> создания работ, не теряя в качестве;</li>
        <li>как применять нейросети в творческих идеях;</li>
        <li><span style="color: ${colorHighlightPink}">повысить чек</span> за свои услуги при помощи AI;</li>
        <li>и многое другое.</li>
      </ul>`
    ]
  },
  {
    text: 'мотивация и энергия',
    background: backgroundColorPurple,
    backgroundRight: backgroundColorPurple,
    description: [
      `Недооцененный, но&nbsp;очень важный критерий любого обучения&nbsp;&mdash; это <span style="color: ${colorHighlightYellow2}">энергия</span>, <span style="color: ${colorHighlightYellow2}">мотивация</span> и&nbsp;<span style="color: ${colorHighlightYellow2}">вдохновение</span> для изучения нового.`,
      `<span style="color: ${colorHighlightYellow2}">Мы&nbsp;дадим</span> тебе этот свежий глоток воздуха, возможность взглянуть на&nbsp;искусство под другим углом, а&nbsp;также поможем <span style="color: ${colorHighlightYellow2}">прокачать софт-скиллы</span>&nbsp;&mdash; критическое мышление, работу в&nbsp;команде, дисциплину. Все это так&nbsp;же важно, как знания.`,
    ]
  },
  {
    text: 'соратники',
    background: backgroundColorBlue2,
    backgroundRight: backgroundColorBlue2,
    description: [
      `<span style="color: ${colorHighlightBlue2}">Мы&nbsp;дадим</span> тебе не&nbsp;просто телеграм-канал, а&nbsp;целое <span style="color: ${colorHighlightBlue2}">комьюнити</span>, где есть возможность <span style="color: ${colorHighlightBlue2}">взаимодействовать с&nbsp;профессионалами</span> из&nbsp;индустрии, находить новых <span style="color: ${colorHighlightBlue2}">соратников и&nbsp;друзей</span>, обмениваться знаниями, а&nbsp;также <span style="color: ${colorHighlightBlue2}">создавать коллаборации</span>.`,
      `С&nbsp;каждого нашего потока один или несколько студентов <span style="color: ${colorHighlightBlue2}">присоединяются к&nbsp;нашим проектам</span>.`,
    ]
  },
  {
    text: 'реальный кейс ',
    background: backgroundColorPurpleLight,
    backgroundRight: backgroundColorPurpleLightRight,
    description: [
      `Для каждого нового потока мы&nbsp;придумываем <span style="color: ${colorHighlightGreen}">реальное рабочее задание</span>, после выполнения которого студенты получают практический опыт&nbsp;и, возможно, кейс в&nbsp;портфолио.`,
      `На&nbsp;специальном закрытом канале мы&nbsp;будем выдавать такие задания <span style="color: ${colorHighlightGreen}">ежемесячно</span>.`,
    ]
  },
  {
    text: 'стримы с ave senshi и командой',
    background: backgroundColorRed,
    backgroundRight: backgroundColorRedRight,
    description: [
      `Наш курс начинается с&nbsp;<span style="color: ${colorHighlightRed}">2-дневного интенсива</span>, на&nbsp;котором ты&nbsp;сразу сможешь взаимодействовать со&nbsp;спикерами и&nbsp;кураторами, получишь ответы на&nbsp;свои вопросы, узнаешь о&nbsp;возможностях применения&nbsp;AI на&nbsp;практике и&nbsp;увидишь, как мы&nbsp;работаем с&nbsp;нейросетями.`,
      `Уже с&nbsp;этой информацией будешь смотреть записанные лекции. <span style="color: ${colorHighlightRed}">Выбор порядка просмотра ты&nbsp;сможешь сделать самостоятельно</span>.`,
    ]
  },
  {
    text: 'доступ в  ai break-in',
    background: backgroundColorYellow,
    backgroundRight: backgroundColorYellowRight,
    description: [
      `Вместе с&nbsp;обучением ты&nbsp;получишь <span style="color: ${colorHighlightYellow}">доступ в&nbsp;закрытый телеграм-канал</span> c&nbsp;новостями, лайфхаками и&nbsp;гайдами, которые используем сами, чтобы ты&nbsp;всегда мог оставаться в&nbsp;курсе и&nbsp;адаптироваться к&nbsp;изменениям.`,
    ]
  }
];