import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';

import gsap from 'gsap/dist/gsap';
import styled from 'styled-components';

import {Feature} from '@molecules';

import LightControlDay from '@assets/svit-home/overview/light-control-day.jpg';
import LightControlNight from '@assets/svit-home/overview/light-control-night.jpg';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;

  margin-left: -20px;
  margin-top: -20px;
`;

export const ImageWrapper = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const LightningControl: React.FC<FeatureWrapperProps> = props => {
  const ref = useRef<HTMLImageElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.LightningControl'});

  useEffect(() => {
    if (ref && ref.current) {
      const tl = gsap.timeline({repeat: -1, delay: 0.5});

      tl.to(ref.current, {
        opacity: 0,
        duration: 2,
      }).to(ref.current, {opacity: 1, duration: 2});
    }
  }, []);

  return (
    <Feature
      title={t('Title')}
      description={t('Description')}
      align="bottom"
      minHeight={300}
      descriptionColor={Colors.white}
      {...props}
    >
      <InnerWrapper>
        <ImageWrapper src={LightControlNight.src} alt="light control night" ref={ref} style={{zIndex: 10}} />
        <ImageWrapper src={LightControlDay.src} alt="light control day" />
      </InnerWrapper>
    </Feature>
  );
};

export default LightningControl;
