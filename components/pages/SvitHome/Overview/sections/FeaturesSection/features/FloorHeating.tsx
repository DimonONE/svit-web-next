import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';

import gsap from 'gsap/dist/gsap';
import styled from 'styled-components';

import {Feature} from '@molecules';

import FloorHeatingBG from '@assets/floor-heating.jpg';
// import FloorHeatingAnimation from '@assets/svit-home/overview/floor-heating.svg';

import {FeatureWrapperProps} from './utils';


const InnerWrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  margin-left: -20px;
  margin-top: -20px;

  /* background-image: url(${FloorHeatingAnimation}); */
  /* background: red; */
  background-repeat: repeat;
`;

const FloorHeating: React.FC<FeatureWrapperProps> = props => {
  const ref = useRef<HTMLDivElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.FloorHeating'});

  useEffect(() => {
    if (ref && ref.current) {
      const tl = gsap.timeline({repeat: -1, repeatDelay: 0});

      tl.fromTo(
        ref.current,
        {
          backgroundPositionY: 0,
        },
        {
          // SVG height
          backgroundPositionY: `-262px`,
          duration: 6,
          ease: 'none',
        }
      );
    }
  }, []);

  return (
    <Feature title={t('Title')} description={t('Description')} align="top" bg={FloorHeatingBG} hasGradient {...props}>
      <InnerWrapper ref={ref} />
    </Feature>
  );
};

export default FloorHeating;
