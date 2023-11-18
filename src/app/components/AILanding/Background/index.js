import Image from 'next/image';

const Background = ({src, alt, backgroundColor, ...other}) =>
  <Image
    src={src}
    alt={alt}
    fill
    priority
    style={{objectFit: 'cover', zIndex: -1, backgroundColor: backgroundColor}}
    quality={100}
    {...other}
  />;

export default Background;