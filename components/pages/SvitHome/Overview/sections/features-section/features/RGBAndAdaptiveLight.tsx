import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Col, Row} from 'antd';

import styled from 'styled-components';

import {Feature} from '@molecules';

import AdaptiveLight from '@assets/adaptive-light.png';
import RGBIcon from '@assets/rgb.svg';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const InnerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RGBAndAdaptiveLight: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection'});

  return (
    <Row gutter={20}>
      <Col md={12} sm={24} xs={24}>
        <Feature description={t('RGB.Title')} align="bottom" minHeight={145} {...props} descriptionColor={Colors.white}>
          <InnerWrapper style={{paddingBottom: 10}}>
            <RGBIcon style={{width: 80}} />
          </InnerWrapper>
        </Feature>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Feature
          description={t('AdaptiveLight.Title')}
          align="bottom"
          minHeight={145}
          descriptionColor={Colors.white}
          {...props}
        >
          <InnerWrapper>
            <Image src={AdaptiveLight} alt="" style={{width: '100%', height: '100%'}} />
          </InnerWrapper>
        </Feature>
      </Col>
    </Row>
  );
};

export default RGBAndAdaptiveLight;
