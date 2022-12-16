/* eslint-disable unused-imports/no-unused-imports-ts */
import React, {useContext, useEffect, useRef} from 'react';
import Helmet from 'react-helmet';
import {useTranslation} from 'react-i18next';

import {Col, Row} from 'antd';

import gsap from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import {Text, Title} from '@custom-antd';

import {AnimatedText, CTABlock, HeroSection} from '@molecules';

import HeroSectionImage from '@assets/hero-section-bg.png';

import Colors from '@styles/Colors';

import {MainContext} from '@contexts';

import {FooterGrid, GridItem, KeypadsWrapper} from './Keypads.styled';
import ChooseSection, {MobileChooseSection} from './sections/ChooseSection';
import ComfortSection from './sections/ComfortSection';
import DecompositionSection from './sections/DecompositionSection';
import ScenariosSection from './sections/ScenariosSection';
import SizeSection from './sections/SizeSection';
import TapticEngine from './sections/TapticEngine';
import WoahSection from './sections/WoahSection';

const Keypads: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads'});

  const {isMobile} = useContext(MainContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const components = gsap.utils.toArray<HTMLDivElement>('.gsap-section');

    components.forEach((panel:HTMLDivElement, i: number) => {
      const start = !i ? 0 : 60;
      const end = components.length * 100;

      ScrollTrigger.create({
        trigger: panel,
        start: `top-=${start} top`,
        pin: true,
        end: `top+=${end}% top+=60`,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <KeypadsWrapper id="main-wrapper" ref={ref}>
      <Helmet>
        <title>Svit Touch - Keypads</title>
      </Helmet>
      <HeroSection bg={HeroSectionImage} className="gsap-section" keyPrefix="SvitTouch.Keypads.HeroSection" />
      <ComfortSection />
      <TapticEngine />
      <ScenariosSection />
      <DecompositionSection />

      {/* <FooterGrid>
        <div className="section">
          <Row gutter={[20, 20]}>
            <Col md={6} xs={12} sm={12}>
              <GridItem>
                <AnimatedText to={5} suffix=" st." color={Colors.white} />
                <Text color={Colors.white70}>Lorem, ipsum.</Text>
              </GridItem>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <GridItem>
                <AnimatedText to={5} suffix=" st." color={Colors.white} />
                <Text color={Colors.white70}>Lorem, ipsum.</Text>
              </GridItem>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <GridItem>
                <AnimatedText to={5} suffix=" st." color={Colors.white} />
                <Text color={Colors.white70}>Lorem, ipsum.</Text>
              </GridItem>
            </Col>
            <Col md={6} xs={12} sm={12}>
              <GridItem>
                <AnimatedText to={5} suffix=" st." color={Colors.white} />
                <Text color={Colors.white70}>Lorem, ipsum.</Text>
              </GridItem>
            </Col>
          </Row>
        </div>
      </FooterGrid> */}

      {/* <FooterGrid>
        <GridItem>
          <AnimatedText to={5} suffix=" st." color={Colors.white} />
          <Text color={Colors.white70}>Lorem, ipsum.</Text>
        </GridItem>
        <GridItem>
          <Title color={Colors.white} fontWeight={800}>
            24/7
          </Title>
          <Text color={Colors.white70}>Lorem, ipsum.</Text>
        </GridItem>
        <GridItem>
          <AnimatedText to={3} suffix=" s." color={Colors.white} />
          <Text color={Colors.white70}>Lorem, ipsum.</Text>
        </GridItem>
        <GridItem>
          <AnimatedText to={1800} suffix=" m" color={Colors.white} />
          <Text color={Colors.white70}>Lorem, ipsum.</Text>
        </GridItem>
      </FooterGrid> */}
      {isMobile ? <MobileChooseSection /> : <ChooseSection />}
      <SizeSection />
      <WoahSection />
      <CTABlock />
    </KeypadsWrapper>
  );
};

export default Keypads;
