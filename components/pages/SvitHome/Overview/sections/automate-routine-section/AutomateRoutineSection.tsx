import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Col, Row, Space} from 'antd';

import gsap from 'gsap/dist/gsap';

import {Text, Title} from '@custom-antd';

import ClockIcon from '@assets/icons/clock.svg';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/phone.svg';
import UserCheckIcon from '@assets/icons/user-check.svg';
import AutomatePhone from '@assets/svit-home/overview/automate-phone.png';

import Colors from '@styles/Colors';
import {device, maxDevice} from '@styles/MediaQueries';

import {
  AutoRoutineSpace,
  AutomateOptionsList,
  AutomateOptionsListItem,
  AutomateRoutineSectionWrapper,
  DescriptionWrapper,
  GreyWrapper,
  PhoneInnerWrapper,
  PhoneWrapper,
} from './AutomateRoutineSection.styled';

const automateOptions = [
  {
    component: PhoneIcon,
    i18nKey: 'PhoneText',
    key: 'phone',
  },
  {
    component: ClockIcon,
    i18nKey: 'ClockText',
    key: 'clock',
  },
  {
    component: LocationIcon,
    i18nKey: 'LocationText',
    key: 'location',
  },
  {
    component: UserCheckIcon,
    i18nKey: 'UserCheckText',
    key: 'user-check',
  },
];

const AutomateRoutineSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.AutomateRoutineSection'});

  const renderedAutomateOptions = automateOptions.map(options => {
    const {component: Component, i18nKey, key} = options;

    return (
      <AutomateOptionsListItem key={key}>
        <Component />
        <Text className="semi-bold big" color={Colors.black}>
          {t(i18nKey)}
        </Text>
      </AutomateOptionsListItem>
    );
  });

  useEffect(() => {
    if (ref && ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          end: 'top center-=30%',
          scrub: 0.5,
        },
      });

      let mm = gsap.matchMedia();

      mm.add(
        {
          isLaptop: device.laptop,
          isMobile: maxDevice.tablet,
        },
        context => {
          // @ts-ignore
          const {isLaptop, isMobile} = context.conditions;

          const tweenVal = isLaptop ? -65 : isMobile ? -40 : -15;

          tl.fromTo('.text', {x: -1000}, {x: tweenVal});
        }
      );
    }
  }, []);

  return (
    <AutomateRoutineSectionWrapper className="vertical-spacing">
      <div className="section" ref={ref}>
        <AutoRoutineSpace>
          <PhoneWrapper>
            <Title className="text first" fontWeight={800} color={Colors.black}>
              {t('Title')}
            </Title>
            <PhoneInnerWrapper>
              <Title className="text second" fontWeight={800} color={Colors.white}>
                {t('Title')}
              </Title>
              <Image src={AutomatePhone} alt="Automate your routine phone" />
            </PhoneInnerWrapper>
          </PhoneWrapper>
          <DescriptionWrapper>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Space size={15} direction="vertical">
                  <Text color={Colors.grey1}>{t('Description')}</Text>
                  <Text color={Colors.grey1}>{t('DescriptionSecond')}</Text>
                  <Text color={Colors.grey1}>{t('DescriptionThird')}</Text>
                </Space>
              </Col>
              <Col span={24} lg={24}>
                <GreyWrapper unsetHeight>
                  <AutomateOptionsList>{renderedAutomateOptions}</AutomateOptionsList>
                </GreyWrapper>
              </Col>
              <Col xs={24} sm={12}>
                <GreyWrapper>
                  <Title className="cell-title" fontWeight={900}>
                    AI
                  </Title>
                  <Text className="semi-bold middle cell-text" color={Colors.black}>
                    {t('LeftCellText')}
                  </Text>
                </GreyWrapper>
              </Col>
              <Col xs={24} sm={12}>
                <GreyWrapper>
                  <Title className="cell-title" fontWeight={900}>
                    ML
                  </Title>
                  <Text className="semi-bold middle cell-text" color={Colors.black}>
                    {t('RightCellText')}
                  </Text>
                </GreyWrapper>
              </Col>
            </Row>
          </DescriptionWrapper>
        </AutoRoutineSpace>
      </div>
    </AutomateRoutineSectionWrapper>
  );
};

export default AutomateRoutineSection;
