/* eslint-disable react/no-unescaped-entities */
import {useTranslation} from 'react-i18next';

import {Text} from '@custom-antd';
import {DoubleColRow} from '@molecules';
import  SvitLogoLight from '@assets/svit-logo-light.svg';
import Colors from '@styles/Colors';

import {AboutUsWrapper, BottomFrame, QuoteWrapper} from './AboutUs.styled';

const AboutUs: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'AboutUs'});

  return (
    <AboutUsWrapper className="vertical-spacing">
      <div className="section">
        <DoubleColRow
          leftContent={<Text className="biggest regular">{t('LeftTitle')}</Text>}
          rightContent={
            <Text color={Colors.grey1} className="big regular">
              {t('RightDescription')}
            </Text>
          }
        />
        <div className="quote-wrapper">
          <BottomFrame>
            <QuoteWrapper>
              <Text className="regular biggest" color={Colors.white}>
                "{t('Quote')}"
              </Text>
            </QuoteWrapper>
          </BottomFrame>
          <SvitLogoLight className="svit-logo" />
        </div>
      </div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
