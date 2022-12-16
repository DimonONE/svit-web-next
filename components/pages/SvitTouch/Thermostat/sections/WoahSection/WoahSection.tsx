import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Col, Row, Space} from 'antd';

import {Text, Title} from '@custom-antd';

import {AnimatedText} from '@molecules';

import Thermostat from '@assets/svit-touch/thermostat/thermostat.png';

import Colors from '@styles/Colors';

import {WoahSectionWrapper} from './WoahSection.styled';

const WoahSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Thermostat.WoahSection'});

  return (
    <WoahSectionWrapper className="vertical-spacing">
      <div className="section">
        <Row gutter={[20, 30]}>
          <Col
            md={{
              span: 10,
            }}
            sm={24}
            xs={24}
          >
            <Image src={Thermostat} alt="Thermostat" className="row-image" />
          </Col>
          <Col
            md={{
              span: 12,
              push: 2,
            }}
            sm={24}
            xs={24}
          >
            <Space size={30} direction="vertical">
              <Title color={Colors.black}>{t('Title')}</Title>
              <Text color={Colors.black}>{t('First')}</Text>
              <Text color={Colors.black}>{t('Second')}</Text>
              <Text color={Colors.black}>{t('Third')}</Text>
            </Space>
          </Col>
        </Row>
        <Row gutter={[20, 20]} className="text-row">
          <Col md={6} xs={12} sm={12}>
            <AnimatedText to={12} suffix="`" />
            <Text>{t('FirstNumber')}</Text>
          </Col>
          <Col md={6} xs={12} sm={12}>
            <AnimatedText to={1.5} suffix="`" toFixedValue={1} />
            <Text>{t('SecondNumber')}</Text>
          </Col>
          <Col md={6} xs={12} sm={12}>
            <AnimatedText to={31} suffix="s." />
            <Text>{t('ThirdNumber')}</Text>
          </Col>
          <Col md={6} xs={12} sm={12}>
            <AnimatedText to={43} suffix="m." />
            <Text>{t('FourthNumber')}</Text>
          </Col>
        </Row>
      </div>
    </WoahSectionWrapper>
  );
};

export default WoahSection;
