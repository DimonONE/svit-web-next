/* eslint-disable unused-imports/no-unused-imports-ts */
import {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Col, Row, Space} from 'antd';

import {Button, Text, Title} from '@custom-antd';

import {AnimatedText, DoubleColRow} from '@molecules';

import {Suffixes} from '@utils/constants';

import WhoaBG from '@assets/svit-touch/keypads/whoa-bg.png';
import WhoaBGMobile from '@assets/svit-touch/keypads/whoa-mobile-bg.png';

import Colors from '@styles/Colors';

import {MainContext} from '@contexts';

import {
  BGWrapper,
  GridItem,
  LeftPart,
  RightPart,
  RightPartGrid,
  RightSection,
  WoahSectionWrapper,
} from './WoahSection.styled';

const WoahSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.WoahSection'});

  const {isTablet} = useContext(MainContext);

  const suffix = Suffixes.mm;

  return (
    <WoahSectionWrapper>
      <div className="section">
        <DoubleColRow
          leftContent={
            <Space size={10} direction="vertical">
              <Title color={Colors.black} fontWeight={800}>
                {t('Woah')}
              </Title>
              <Text className="semi-bold biggest">{t('Woah')}</Text>
            </Space>
          }
          rightContent={
            <Space size={10} direction="vertical">
              <Text className="semi-bold big">asdsadsa</Text>
              <Button type="primary" i18nKey="Buy" style={{height: 35, paddingTop: 0, paddingBottom: 0}} />
            </Space>
          }
        />
        <BGWrapper>
          <Image src={isTablet ? WhoaBGMobile : WhoaBG} alt="" />
          <Row style={{height: '100%', width: '100%'}}>
            <Col
              lg={{
                span: 11,
                push: 13,
              }}
              sm={{span: 24}}
              xs={{span: 24}}
            >
              <RightSection>
                <RightPartGrid>
                  <GridItem>
                    <AnimatedText to={160} suffix={suffix} isSuffixTranslated level={2} />
                    <Text>{t('First')}</Text>
                  </GridItem>
                  <GridItem>
                    <AnimatedText to={80} suffix={suffix} isSuffixTranslated level={2} />
                    <Text>{t('Second')}</Text>
                  </GridItem>
                  <GridItem>
                    <AnimatedText to={5.8} toFixedValue={1} suffix={suffix} isSuffixTranslated level={2} />
                    <Text>{t('Third')}</Text>
                  </GridItem>
                  <GridItem>
                    <AnimatedText to={1} suffix={suffix} isSuffixTranslated level={2} />
                    <Text>{t('Fourth')}</Text>
                  </GridItem>
                </RightPartGrid>
              </RightSection>
            </Col>
          </Row>
        </BGWrapper>

        {/* <LeftPart>
          <Title color={Colors.black} fontWeight={800}>
            {t('Woah')}
          </Title>
          <div className="panel-frame-wrapper">
            <img src={WhoaPanel} className="panel" />
            <img src={WhoaPanelFrame} className="panel-frame" />
          </div>
        </LeftPart>
        <RightPart size={50} direction="vertical">
          <Space size={35} direction="vertical">
            <Title level={3} color={Colors.black}>
              {t('Title')}
            </Title>
            <Text color={Colors.grey1}>{t('Description')}</Text>
            <div>
              <Button type="primary">{t('Button')}</Button>
            </div>
          </Space>
          <RightPartGrid>
            <GridItem>
              <AnimatedText to={160} suffix={suffix} isSuffixTranslated />
              <Text>{t('First')}</Text>
            </GridItem>
            <GridItem>
              <AnimatedText to={80} suffix={suffix} isSuffixTranslated />
              <Text>{t('Second')}</Text>
            </GridItem>
            <GridItem>
              <AnimatedText to={5.8} toFixedValue={1} suffix={suffix} isSuffixTranslated />
              <Text>{t('Third')}</Text>
            </GridItem>
            <GridItem>
              <AnimatedText to={1} suffix={suffix} isSuffixTranslated />
              <Text>{t('Fourth')}</Text>
            </GridItem>
          </RightPartGrid>
        </RightPart> */}
      </div>
    </WoahSectionWrapper>
  );
};

export default WoahSection;
