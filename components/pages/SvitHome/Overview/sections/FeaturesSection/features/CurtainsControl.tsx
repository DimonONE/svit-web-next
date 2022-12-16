import {useTranslation} from 'react-i18next';

import styled from 'styled-components';

import {Icon} from '@atoms';

import {Feature} from '@molecules';

import Colors from '@styles/Colors';

import {FeatureWrapperProps} from './utils';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px;
  height: 62px;
  width: 62px;

  background-color: ${Colors.white};

  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 12px;
  }

  svg {
    width: inherit;
    height: inherit;
  }
`;

const InnerWrapper = styled.div`
  flex: 1;
  padding-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const CurtainsControl: React.FC<FeatureWrapperProps> = props => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection.CurtainsControl'});

  return (
    <Feature title={t('Title')} description={t('Description')} align="bottom" {...props}>
      <InnerWrapper>
        <Row>
          <IconWrapper key="tulle">
            <Icon name="tulle-dark" key="tulle-dark" />
          </IconWrapper>
          <IconWrapper key="blindes">
            <Icon name="blindes-dark" />
          </IconWrapper>
          <IconWrapper key="french-curtains-no-frame">
            <Icon name="french-curtains-no-frame-dark" />
          </IconWrapper>
        </Row>
        <Row>
          <IconWrapper key="curtains-no-frame">
            <Icon name="curtains-no-frame-dark" />
          </IconWrapper>
          <IconWrapper key="jalousie">
            <Icon name="jalousie-dark" />
          </IconWrapper>
        </Row>
      </InnerWrapper>
    </Feature>
  );
};

export default CurtainsControl;
