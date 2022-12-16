/* eslint-disable unused-imports/no-unused-imports-ts */
import {useTranslation} from 'react-i18next';

import {Text, Title} from '@custom-antd';

import Colors from '@styles/Colors';

import {
  ButtonWrapper,
  DescriptionWrapper,
  HeroSectionButton,
  HeroSectionWrapper,
  ScrollDownWrapper,
} from './HeroSection.styled';
import ScrollDown from './ScrollDown';

type HeroSectionProps = {
  bg?: any;
  className?: string;
  keyPrefix: string;
  children?: React.ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = props => {
  const {bg, className, keyPrefix, children} = props;

  const {t} = useTranslation('translation', {keyPrefix});

  return (
    <HeroSectionWrapper className={className} $bg={!children ? bg : false}>
      <div className="section">
        <Title level={2} color={Colors.white} fontWeight={500}>
          {t('Title')}
        </Title>
        <DescriptionWrapper>
          <Title color={Colors.white} fontWeight={800}>
            {t('Description')}
          </Title>
        </DescriptionWrapper>
        {/* <ButtonWrapper>
          <HeroSectionButton type="primary" i18nKey="Buy" />
        </ButtonWrapper> */}
      </div>
      {children}
      <ScrollDown />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
