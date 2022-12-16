import {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Col, Row, Switch} from 'antd';

import gsap from 'gsap/dist/gsap';
import Image from 'next/image';

import {Text, Title} from '@custom-antd';

import ThermostatDay from '@assets/svit-touch/thermostat/thermostat-day.jpg';
import ThermostatNight from '@assets/svit-touch/thermostat/thermostat-night.jpg';

import Colors from '@styles/Colors';

import {
  Footer,
  Header,
  ImagesBlock,
  LowerBlock,
  ScenariosListItem,
  ThermoScenariosSectionWrapper,
  UpperBlock,
} from './ThermoScenariosSection.styled';

const ThermoScenariosSection: React.FC = () => {
  const [animationState, setAnimationState] = useState<'day' | 'night'>('day');
  const [isInTransition, setIsInTransition] = useState(false);
  const [isInteractedWith, setInteractedState] = useState(false);

  const tween = useRef<gsap.core.Timeline>(null);
  const image = useRef<HTMLImageElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Thermostat.ThermoScenariosSection'});

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
    <ThermoScenariosSectionWrapper>
      <div className="vertical-spacing">
        <UpperBlock className="section">
          <Header>
            <Text className="semi-bold big" color={Colors.white}>
              {t('Description')}
            </Text>
          </Header>
          <Footer className="scenario-footer">
            <Switch disabled={isInTransition} onChange={onSwitchClick} />
            <Text color={Colors.white} className="semi-bold big">
              {t(animationState === 'day' ? 'NightScenario' : 'DayScenario')}
            </Text>
          </Footer>
        </UpperBlock>
        <LowerBlock className="section">
          <Row gutter={[20, 20]}>
            <Col md={6} xs={12} sm={12}>
              <ScenariosListItem>
                <Title className="big" fontWeight={700} color={Colors.white} level={3}>
                  {t('Title')}
                </Title>
                <Text className="semi-bold big" color={Colors.white}>
                  {t('Description')}
                </Text>
              </ScenariosListItem>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <ScenariosListItem>
                <Title className="big" fontWeight={700} color={Colors.white} level={3}>
                  {t('Title')}
                </Title>
                <Text className="semi-bold big" color={Colors.white}>
                  {t('Description')}
                </Text>
              </ScenariosListItem>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <ScenariosListItem>
                <Title className="big" fontWeight={700} color={Colors.white} level={3}>
                  {t('Title')}
                </Title>
                <Text className="semi-bold big" color={Colors.white}>
                  {t('Description')}
                </Text>
              </ScenariosListItem>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <ScenariosListItem>
                <Title className="big" fontWeight={700} color={Colors.white} level={3}>
                  {t('Title')}
                </Title>
                <Text className="semi-bold big" color={Colors.white}>
                  {t('Description')}
                </Text>
              </ScenariosListItem>
            </Col>
          </Row>
        </LowerBlock>
      </div>
      <ImagesBlock className="images-block-wrapper">
        <Image src={ThermostatDay} alt="Bath day" style={{zIndex: 1}} />
        <Image src={ThermostatNight} alt="Bath night" style={{zIndex: 2}} ref={image} />
      </ImagesBlock>
    </ThermoScenariosSectionWrapper>
  );
};

export default ThermoScenariosSection;
