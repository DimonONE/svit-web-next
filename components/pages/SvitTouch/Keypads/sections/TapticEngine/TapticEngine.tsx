import {useTranslation} from 'react-i18next';

import {Col, Row} from 'antd';

import {Text, Title} from '@custom-antd';

import {DoubleColRow} from '@molecules';

// @ts-ignore
import TapticEngineVideo from '@assets/svit-touch/keypads/taptic-engine-keypads.mp4';

import Colors from '@styles/Colors';

import {BottomSection, RightSection, TapticEngineWrapper} from './TapticEngine.styled';

const TapticEngine: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.TapticEngineSection'});

  return (
    <TapticEngineWrapper className="vertical-spacing">
      <div className="section">
        <DoubleColRow
          leftContent={
            <Text color={Colors.black} className="biggest semi-bold">
              {t('FirstText')}
            </Text>
          }
          rightContent={<Text color={Colors.grey1}>{t('SecondText')}</Text>}
        />
        <BottomSection>
          <video autoPlay muted loop controls={false} playsInline>
            <source src={TapticEngineVideo} type="video/mp4" />
          </video>
          <Row style={{height: '100%', width: '100%'}}>
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
    </TapticEngineWrapper>
  );
};

export default TapticEngine;
