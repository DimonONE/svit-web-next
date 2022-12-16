import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import {Feature} from '@molecules';

import LeaksProtectBG from '@assets/svit-home/overview/leaks-protect.jpg';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;
`;

const LeaksProtect: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.LeaksProtect'});

  return (
    <Feature
      title={t('Title')}
      description={t('Description')}
      align="bottom"
      minHeight={250}
      descriptionColor={Colors.white}
      bg={LeaksProtectBG.src}
      {...props}
    >
      <InnerWrapper />
    </Feature>
  );
};

export default LeaksProtect;
