/* eslint-disable unused-imports/no-unused-imports-ts */
import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import gsap, {Power2} from 'gsap/dist/gsap';

import {Text} from '@custom-antd';

import SizeBlack from '@assets/size-black.png';
import SizeWhite from '@assets/size-white.png';

import Colors from '@styles/Colors';

import {Content, Header, Section, SizeSectionWrapper} from './SizeSection.styled';

const SizeSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.SizeSection'});

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'center bottom',
        end: () => 'bottom bottom',
        scrub: 0.5,
      },
      defaults: {ease: Power2.easeInOut},
    });

    tl.fromTo(
      '.left .to',
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      },
      0
    )
      .fromTo(
        '.left .to img',
        {
          xPercent: -50,
          x: 0,
        },
        {
          xPercent: 50,
          x: 0,
        },
        0
      )
      .fromTo(
        '.right .to',
        {
          xPercent: -100,
        },
        {
          xPercent: 0,
        },
        0
      )
      .fromTo(
        '.right .to img',
        {
          xPercent: 50,
        },
        {
          xPercent: -50,
        },
        0
      );
  }, []);

  return (
    <SizeSectionWrapper ref={ref}>
      <Content>
        <Section className="comparison-section left">
          <Header className="left">
            <Text className="biggest semi-bold" color={Colors.grey1}>
              {t('TitleLeft')}
            </Text>
          </Header>
          <div className="comparison-image from">
            <Image src={SizeBlack} alt="before" />
          </div>
          <div className="comparison-image to">
            <Image src={SizeWhite} alt="before" />
          </div>
        </Section>
        <Section className="comparison-section right">
          <Header className="right">
            <Text className="biggest semi-bold" color={Colors.grey1}>
              {t('TitleRight')}
            </Text>
          </Header>
          <div className="comparison-image from">
            <Image src={SizeWhite} alt="before" />
          </div>
          <div className="comparison-image to">
            <Image src={SizeBlack} alt="before" />
          </div>
        </Section>
      </Content>
    </SizeSectionWrapper>
  );
};

export default SizeSection;
