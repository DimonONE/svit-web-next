import {useTranslation} from 'react-i18next';

import {Col, Row} from 'antd';

import {Text, Title} from '@custom-antd';

import SmartHomeIntegrationCompanyIcon from '@assets/svit-touch/thermostat/smart-home-integration-company.svg';

import Colors from '@styles/Colors';

import {
  IntegrationsList,
  IntegrationsListItem,
  SmartHomeIntegrationsSectionWrapper,
} from './SmartHomeIntegrationsSection.styled';

const SmartHomeIntegrationsSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Thermostat.SmartHomeIntegrationsSection'});

  return (
    <SmartHomeIntegrationsSectionWrapper className="vertical-spacing">
      <div className="section">
        <Row gutter={[20, 20]}>
          <Col
            md={{
              span: 12,
            }}
            sm={24}
            xs={24}
          >
            <Title color={Colors.black}>{t('Title')}</Title>
            <Text>{t('Description')}</Text>
          </Col>
          <Col
            md={{
              span: 12,
            }}
            sm={24}
            xs={24}
          >
            <IntegrationsList>
              <IntegrationsListItem>
                <Row wrap={false}>
                  <Col flex="150px">
                    <SmartHomeIntegrationCompanyIcon />
                  </Col>
                  <Col flex="auto">
                    <Text>{t('FirstSmartHomeCompany.Description')}</Text>
                  </Col>
                </Row>
              </IntegrationsListItem>
              <IntegrationsListItem>
                <Row wrap={false}>
                  <Col flex="150px">
                    <SmartHomeIntegrationCompanyIcon />
                  </Col>
                  <Col flex="auto">
                    <Text>{t('SecondSmartHomeCompany.Description')}</Text>
                  </Col>
                </Row>
              </IntegrationsListItem>
              <IntegrationsListItem>
                <Row wrap={false}>
                  <Col flex="150px">
                    <SmartHomeIntegrationCompanyIcon />
                  </Col>
                  <Col flex="auto">
                    <Text>{t('ThirdSmartHomeCompany.Description')}</Text>
                  </Col>
                </Row>
              </IntegrationsListItem>
            </IntegrationsList>
          </Col>
        </Row>
      </div>
    </SmartHomeIntegrationsSectionWrapper>
  );
};

export default SmartHomeIntegrationsSection;
