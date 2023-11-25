import Image from 'next/image';

const Background = ({src, alt, ...other}) =>
  <Image
    src={src}
    alt={alt}
    fill
    priority
    style={{objectFit: 'cover', zIndex: -1}}
    quality={100}
    {...other}
  />;

export default Background;