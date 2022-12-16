import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

import gsap, {Power2} from 'gsap/dist/gsap';
import styled from 'styled-components';

import {Text} from '@custom-antd';

import {Feature} from '@molecules';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  padding: 50px 0;

  .slider-wrapper {
    width: 100%;
    padding: 3px;
    border-radius: 40px;

    background: ${Colors.white};

    .slider {
      position: relative;

      width: 100%;
      height: 30px;
      border-radius: 40px;

      background: linear-gradient(90deg, #9ee2ff 0%, #ffffff 50%, #ff8e8e 100%);

      .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 55px;
        height: 50px;
        border-radius: 50%;

        background: ${Colors.white};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .custom-text {
          position: absolute;
          bottom: calc(100% + 5px);
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;

const ClimateControl: React.FC<FeatureWrapperProps> = props => {
  const [percent, setPercent] = useState(22);

  const ref = useRef<HTMLDivElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.ClimateControl'});

  useEffect(() => {
    if (ref && ref.current) {
      const comp = ref.current;
      const temp = comp.querySelector('.custom-text');

      const tl = gsap.timeline({
        repeat: -1,
        delay: 1,
        onUpdate: () => {
          const percentValue = Number(Number(comp.style.left.replace('%', '')).toFixed());

          // Don't throw potatoes and tomatoes at me ;)
          if (percentValue === 15) {
            setPercent(16);
          } else if (percentValue > 15 && percentValue < 22) {
            setPercent(17);
          } else if (percentValue >= 22 && percentValue < 29) {
            setPercent(18);
          } else if (percentValue >= 29 && percentValue < 36) {
            setPercent(19);
          } else if (percentValue >= 36 && percentValue < 43) {
            setPercent(20);
          } else if (percentValue >= 43 && percentValue < 50) {
            setPercent(21);
          } else if (percentValue >= 50 && percentValue < 57) {
            setPercent(22);
          } else if (percentValue >= 57 && percentValue < 64) {
            setPercent(23);
          } else if (percentValue >= 64 && percentValue < 71) {
            setPercent(24);
          } else if (percentValue >= 71 && percentValue < 78) {
            setPercent(25);
          } else {
            setPercent(26);
          }
        },
      });

      tl.to(ref.current, {
        left: '85%',
        duration: 1.5,
        ease: Power2.easeInOut,
      })
        .to(ref.current, {
          left: '15%',
          duration: 1.5,
          ease: Power2.easeInOut,
        })
        .to(ref.current, {
          left: '50%',
          duration: 1,
          ease: Power2.easeInOut,
        });
    }
  }, []);

  return (
    <Feature title={t('Title')} description={t('Description')} align="bottom" minHeight={0} {...props}>
      <InnerWrapper>
        <div className="slider-wrapper">
          <div className="slider">
            <div className="circle" ref={ref}>
              <Text className="regular big">+{percent}&#176;</Text>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </Feature>
  );
};

export default ClimateControl;
