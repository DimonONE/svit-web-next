import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import {Col, Row, Space} from 'antd';

import gsap from 'gsap/dist/gsap';
import styled from 'styled-components';

import {Text, Title} from '@custom-antd';

import ControllerHalfOpacityImage from '@assets/svit-home/overview/controller-half-opacity.png';
import ControllerImage from '@assets/svit-home/overview/controller.png';

import Colors from '@styles/Colors';
import Image from 'next/image';

// import {AnimatedText} from '@src/components/molecules';

const AboutHardMobileSectionWrapper = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: flex-end;

  min-height: 950px;

  background-color: ${Colors.black};
  background-size: cover;
  background-repeat: no-repeat;

  .section {
    position: relative;
    z-index: 10;

    .ant-space {
      width: 100%;
    }
  }

  img {
    position: absolute;

    height: 350px;

    &.controller-image {
      top: 30px;
      z-index: 6;
    }

    &.controller-half-opacity-image {
      bottom: 50px;
      right: 0;
      z-index: 5;
    }
  }
`;

const HardFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px 40px;
  flex: 1;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
`;

const AboutHardSectionMobile: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.AboutHardSection'});

  useEffect(() => {
    const images = gsap.utils.toArray<HTMLImageElement>('.parallax');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-hard-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(images[0], {y: 100, ease: 'none'}, 0);
    tl.to(images[1], {y: -100, ease: 'none'}, 0);
  }, []);

  return (
    <AboutHardMobileSectionWrapper className="vertical-spacing" id="about-hard-section">
      <div className="section">
        <Row>
          <Col span={24}>
            <Space size={50} direction="vertical">
              <Space size={40} direction="vertical">
                <Title fontWeight={900}>{t('Title')}</Title>
                <Text className="semi-bold big" color={Colors.white}>
                  {t('Description')}
                </Text>
              </Space>
              {/* <HardFeaturesGrid>
                <GridItem>
                  <AnimatedText to={5} suffix=" st." color={Colors.white} />
                  <Text className="regular big" color={Colors.white50}>
                    {t('First')}
                  </Text>
                </GridItem>
                <GridItem>
                  <Title color={Colors.white} fontWeight={800}>
                    24/7
                  </Title>
                  <Text className="regular big" color={Colors.white50}>
                    {t('Second')}
                  </Text>
                </GridItem>
                <GridItem>
                  <AnimatedText prefix="0" to={3} suffix="S" color={Colors.white} isSuffixTranslated />
                  <Text className="regular big" color={Colors.white50}>
                    {t('Third')}
                  </Text>
                </GridItem>
                <GridItem>
                  <AnimatedText to={1800} suffix="M" color={Colors.white} isSuffixTranslated />
                  <Text className="regular big" color={Colors.white50}>
                    {t('Fourth')}
                  </Text>
                </GridItem>
              </HardFeaturesGrid> */}
            </Space>
          </Col>
        </Row>
      </div>
      <Image src={ControllerImage} alt="Controller" className="parallax controller-image" data-speed=".2" />
      <Image
        src={ControllerHalfOpacityImage}
        alt="Controller with halp opacity"
        className="parallax controller-half-opacity-image"
        data-speed="-0.2"
      />
    </AboutHardMobileSectionWrapper>
  );
};

export default AboutHardSectionMobile;
