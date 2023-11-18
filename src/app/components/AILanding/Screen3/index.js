'use client';
import Background from '../Background';
import BgScreen1 from '../../../../../public/images/backgrounds/bg-screen1.jpg';
import SectionContainer from '../SectionContainer';
import ContentContainer from '../ContentContainer';

const Screen3 = () => {
  return (
    <SectionContainer>
      <Background
        src={BgScreen1}
        alt={'background1'}
      />
      <ContentContainer>

      </ContentContainer>
    </SectionContainer>
  );
};

export default Screen3;