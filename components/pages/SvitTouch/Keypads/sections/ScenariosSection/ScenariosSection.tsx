import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Switch} from 'antd';

import gsap from 'gsap/dist/gsap';

import {Text, Title} from '@custom-antd';

import RoomDay from '@assets/room-day.png';
import RoomNight from '@assets/room-night.png';

import Colors from '@styles/Colors';

import {Footer, Header, ImagesBlock, ScenariosSectionWrapper, UpperBlock} from './ScenariosSection.styled';

const ScenariosSection: React.FC = () => {
  const [animationState, setAnimationState] = useState<'day' | 'night'>('day');
  const [isInTransition, setIsInTransition] = useState(false);
  const [isInteractedWith, setInteractedState] = useState(false);

  const tween = useRef<gsap.core.Timeline>(null);
  const image = useRef<HTMLImageElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.ScenariosSection'});

  const onSwitchClick = () => {
    if (!isInteractedWith) {
      setInteractedState(true);
    }

    setIsInTransition(true);
  };

  useEffect(() => {
    // @ts-ignore
    tween.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        setIsInTransition(false);
        setAnimationState('night');
      },
      onReverseComplete: () => {
        setIsInTransition(false);
        setAnimationState('day');
      },
    });

    tween.current.fromTo(
      image.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      0
    );

    tween.current.fromTo(
      '.animated-title',
      {
        color: Colors.black,
      },
      {
        color: Colors.white,
      },
      0
    );

    return () => {
      // @ts-ignore
      tween.current.kill();
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (isInteractedWith) {
      if (isInTransition) {
        if (animationState === 'day') {
          tween.current?.play();
        } else {
          tween.current?.reverse();
        }
      }
    }
  }, [isInteractedWith, isInTransition]);

  return (
    <ScenariosSectionWrapper>
      <UpperBlock className="section">
        <Header>
          <Title color={Colors.black} fontWeight={800} className="animated-title">
            {t('Title')}
          </Title>
          <Text className="semi-bold big" color={Colors.grey1}>
            {t('Description')}
          </Text>
        </Header>
        <Footer className="scenario-footer">
          <Switch disabled={isInTransition} onChange={onSwitchClick} />
          <Text color={Colors.grey1} className="semi-bold big">
            {t(animationState === 'day' ? 'NightScenario' : 'DayScenario')}
          </Text>
        </Footer>
      </UpperBlock>
      <ImagesBlock className="images-block-wrapper">
        <Image src={RoomDay} alt="Room day" style={{zIndex: 1}} className="room-day" />
        <Image src={RoomNight} alt="Room night" style={{zIndex: 2}} className="room-night" ref={image} />
      </ImagesBlock>
    </ScenariosSectionWrapper>
  );
};

export default ScenariosSection;
