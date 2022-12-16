import {useTranslation} from 'react-i18next';

import Lottie from 'lottie-react';
import styled from 'styled-components';

import {Feature} from '@molecules';

import GatesAndGarageAnimation from '@assets/svit-home/overview/gates-and-garage.json';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;

  height: 100px;

  svg {
    height: 100px !important;
    padding: 20px 0 0 0;
  }
`;

const GatesAndGarage: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.GatesAndGarage'});

  return (
    <Feature title={t('Title')} description={t('Description')} align="top" {...props}>
      <InnerWrapper>
        <Lottie animationData={GatesAndGarageAnimation} loop />
      </InnerWrapper>
    </Feature>
  );
};

export default GatesAndGarage;
