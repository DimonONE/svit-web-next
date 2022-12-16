import {CSSProperties, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Link from 'next/link';

import {Text, Title} from '@custom-antd';

import {ChevronRightIcon} from '@molecules/CTABlock/CTABlock';

import SmartHomeTabletBG from '@assets/home/home-smart-home-tablet.jpg';
import SmartHomeBG from '@assets/home/home-smart-home.jpg';
import SvitTouchTabletBG from '@assets/home/home-svit-touch-tablet.jpg';
import SvitTouchBG from '@assets/home/home-svit-touch.jpg';

import Colors from '@styles/Colors';

import {MainContext} from '@contexts';

import {BottomText, HomeWrapper, Part} from './Home.styled';

const Home: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'Home'});

  const iconStyle: CSSProperties = {
    marginLeft: 5,
    padding: 3,
    borderRadius: '50%',
    backgroundColor: Colors.grey1,
    fontSize: 14,
  };

  const {isTablet, ...props} = useContext(MainContext);
  const svitTouchBGImage = isTablet ? SvitTouchTabletBG : SvitTouchBG;
  const smartHomeBGImage = isTablet ? SmartHomeTabletBG : SmartHomeBG;

  return (
    <HomeWrapper>
      <Link href="svit-touch/keypads">
        <Part $bg={svitTouchBGImage} bgPosition={isTablet ? '100%' : '50% 50%'}>
          <Title level={3}>{t('Left.Description')}</Title>
          <Text color={Colors.white} className="biggest bold">
            {t('Left.Title')}
          </Text>
          <BottomText className="clickable">
            <Text className="big semi-bold" color={Colors.white} onClick={() => {}}>
              {t('Left.Button')}
            </Text>
            <ChevronRightIcon style={iconStyle} />
          </BottomText>
        </Part>
      </Link>
      <Link href="svit-home/overview">
        <Part $bg={smartHomeBGImage} bgPosition={isTablet ? '100% 30%' : 'left'}>
          <Title level={3}>{t('Right.Description')}</Title>
          <Text color={Colors.white} className="biggest bold">
            {t('Right.Title')}
          </Text>
          <BottomText className="clickable">
            <Text className="big semi-bold" color={Colors.white} onClick={() => {}}>
              {t('Right.Button')}
            </Text>
            <ChevronRightIcon style={iconStyle} />
          </BottomText>
        </Part>
      </Link>
    </HomeWrapper>
  );
};

export default Home;
