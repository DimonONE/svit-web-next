import {useTranslation} from 'react-i18next';

import {Col, Row} from 'antd';

import styled from 'styled-components';

import {Text, Title} from '@custom-antd';

import {DoubleColRow} from '@molecules';

// @ts-ignore
import TapticEngineVideo from '@assets/svit-touch/thermostat/thermostat-wave-bg.mp4';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

const TapticEngineSectionWrapper = styled.section``;

const BottomSection = styled.div`
  position: relative;
  overflow: hidden;

  height: 550px;
  border-radius: 35px;

  background: #dcc8c8;

  video {
    position: absolute;

    width: 100%;
    height: 100%;
    border-radius: 35px;

    object-fit: cover;
    object-position: left;
  }

  @media ${maxDevice.tablet} {
    height: 300px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  h1 {
    max-width: 272px;
    margin-bottom: 50px !important;
  }

  span {
    max-width: 330px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${maxDevice.laptop} {
    padding: 30px;
  }
`;

const TapticEngineSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Thermostat.TapticEngineSection'});

  return (
    <TapticEngineSectionWrapper className="vertical-spacing">
      <div className="section">
        <DoubleColRow
          leftContent={<Text className="biggest regular">{t('LeftTitle')}</Text>}
          rightContent={
            <Text color={Colors.grey1} className="big regular">
              {t('RightDescription')}
            </Text>
          }
        />
        <BottomSection>
          <video autoPlay muted loop controls={false} playsInline>
            <source src={TapticEngineVideo} type="video/mp4" />
          </video>
          <Row style={{height: '100%'}}>
            <Col
              sm={{
                span: 12,
                push: 12,
              }}
              xs={{span: 24}}
            >
              <RightSection>
                <Title color={Colors.black} fontWeight={800}>
                  {t('ThirdText')}
                </Title>
                <Text color={Colors.black}>{t('FourthText')}</Text>
                <Text color={Colors.black}>{t('FifthText')}</Text>
              </RightSection>
            </Col>
          </Row>
        </BottomSection>
      </div>
    </TapticEngineSectionWrapper>
  );
};

export default TapticEngineSection;
