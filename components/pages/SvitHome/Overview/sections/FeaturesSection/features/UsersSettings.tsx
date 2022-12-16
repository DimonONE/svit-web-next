import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import gsap from 'gsap/dist/gsap';
import styled from 'styled-components';

// import {Text} from '@custom-antd';
import {Feature} from '@molecules';

import Grandma from '@assets/svit-home/overview/grandma.png';
import Grandpa from '@assets/svit-home/overview/grandpa.png';
import Husband from '@assets/svit-home/overview/husband.png';
import Me from '@assets/svit-home/overview/me.png';
import Mechanic from '@assets/svit-home/overview/mechanic.png';
import OurKid from '@assets/svit-home/overview/our-kid.png';
import Security from '@assets/svit-home/overview/security.png';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const icons = [
  {
    src: Me,
    i18nKey: 'Me',
  },
  {
    src: Husband,
    i18nKey: 'Husband',
  },
  {
    src: OurKid,
    i18nKey: 'OurKid',
  },
  {
    src: Grandpa,
    i18nKey: 'Grandpa',
  },
  {
    src: Grandma,
    i18nKey: 'Grandma',
  },
  {
    src: Mechanic,
    i18nKey: 'Mechanic',
  },
  {
    src: Security,
    i18nKey: 'Security',
  },
];

const InnerWrapper = styled.div`
  flex: 1;
  padding: 20px 0 10px 0;
`;

const IconsList = styled.ul`
  display: flex;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

const IconsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 60px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
`;

const UsersSettings: React.FC<FeatureWrapperProps> = props => {
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.UsersSettings'});

  const renderedIcons = icons.map((item, index) => {
    const {src, i18nKey} = item;

    const key = src + i18nKey + index;

    return (
      <IconsListItem key={key}>
        <Image src={src} alt={`${i18nKey} - icon`} />
        {/* <Text className="regular small" color={Colors.grey1}>
          {t(i18nKey)}
        </Text> */}
      </IconsListItem>
    );
  });

  useEffect(() => {
    if (ref && listRef && ref.current && listRef.current) {
      const feature = document.getElementById('users-settings-feature') as HTMLElement;
      const widthWOPaddings = feature?.offsetWidth - 40;

      const targetShift = 540 - widthWOPaddings;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'bottom+=100 bottom',
          end: 'center center',
          scrub: 0.5,
        },
      });

      tl.set(ref.current, {x: 0}).to(ref.current, {
        x: targetShift < 0 ? 0 : -targetShift,

        ease: 'none',
      });
    }
  }, []);

  return (
    <Feature
      id="users-settings-feature"
      description={t('Description')}
      align="top"
      descriptionColor={Colors.black}
      {...props}
    >
      <InnerWrapper ref={ref}>
        <IconsList ref={listRef}>{renderedIcons}</IconsList>
      </InnerWrapper>
    </Feature>
  );
};

export default UsersSettings;
