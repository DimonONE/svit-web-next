import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import styled from 'styled-components';

import {Feature} from '@molecules';

import ScenasBG from '@assets/scenas.png';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: -20px;
`;

const Scenas: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.Scenas'});

  return (
    <Feature title={t('Title')} description={t('Description')} align="top" minHeight={365} {...props}>
      <InnerWrapper>
        <Image src={ScenasBG} alt="dasdas" style={{maxWidth: '225px', width: '100%', height: 'auto'}} />
      </InnerWrapper>
    </Feature>
  );
};

export default Scenas;
