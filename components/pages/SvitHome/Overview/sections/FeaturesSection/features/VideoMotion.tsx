import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';

import gsap from 'gsap/dist/gsap';
import styled from 'styled-components';

import {Text} from '@custom-antd';

import {Feature} from '@molecules';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;

  span {
    display: flex;
    align-items: center;
  }

  .rec-indicator {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;

    background-color: red;
  }
`;

const VideoMotion: React.FC<FeatureWrapperProps> = props => {
  const ref = useRef<HTMLDivElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.VideoMotion'});

  useEffect(() => {
    if (ref && ref.current) {
      const tl = gsap.timeline({repeat: -1, repeatDelay: 0});

      tl.to(ref.current, {backgroundColor: Colors.grey3, duration: 0.35}).to(ref.current, {
        backgroundColor: 'red',
        duration: 0.35,
      });
    }
  }, []);

  return (
    <Feature title={t('Title')} description={t('Description')} align="bottom" minHeight={180} {...props}>
      <InnerWrapper>
        <Text className="semi-bold biggest uppercase" color={Colors.black}>
          <div className="rec-indicator" ref={ref} />
          rec
        </Text>
      </InnerWrapper>
    </Feature>
  );
};

export default VideoMotion;
