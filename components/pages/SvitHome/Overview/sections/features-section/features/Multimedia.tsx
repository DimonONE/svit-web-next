import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import styled from 'styled-components';

import {Text} from '@custom-antd';

import {Feature} from '@molecules';

import AirPlay from '@assets/svit-home/overview/airplay.svg';
import Laptop from '@assets/svit-home/overview/laptop.svg';
import Radio from '@assets/svit-home/overview/radio.svg';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-top: 30px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 40px;
  }

  .image-row {
    display: flex;

    margin-bottom: 10px;

    img {
      height: 45px;
      width: 50px;

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`;

const Multimedia: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.Multimedia'});

  return (
    <Feature description={t('Description')} align="top" {...props}>
      <InnerWrapper>
        <ImageWrapper>
          <div className="image-row">
            <Image src={Radio} alt="Radio" />
          </div>
          <Text className="regular biggest">{t('Radio')}</Text>
        </ImageWrapper>
        <ImageWrapper>
          <div className="image-row">
            <Image src={Laptop} alt="Laptop" />
            <Image src={AirPlay} alt="AirPlay" />
          </div>
          <Text className="regular biggest">{t('AirPlay')}</Text>
        </ImageWrapper>
      </InnerWrapper>
    </Feature>
  );
};

export default Multimedia;
