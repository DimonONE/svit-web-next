import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import {Feature} from '@molecules';

import SecuritySystemsIntegrationBG from '@assets/security-system-integration.png';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const SecuritySystemsIntegration: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {
    keyPrefix: 'SvitHome.Overview.FeaturesSection.SecuritySystemsIntegration',
  });

  return (
    <Feature title={t('Title')} description={t('Description')} align="bottom" {...props}>
      <InnerWrapper>
        <Image src={SecuritySystemsIntegrationBG.src} alt="Security Systems Integration" />
      </InnerWrapper>
    </Feature>
  );
};

export default SecuritySystemsIntegration;
