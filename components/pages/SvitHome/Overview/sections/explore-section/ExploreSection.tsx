import {useTranslation} from 'react-i18next';

import {Col, Row, Space} from 'antd';

import styled from 'styled-components';

import {Text, Title} from '@custom-antd';

import ControllersShelf from '@assets/svit-home/overview/controllers-shelf.png';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';
import Image from 'next/image';

const ExploreSectionWrapper = styled.section`
  position: relative;
  overflow: hidden;

  background-color: ${Colors.black};

  .section {
    position: relative;
    z-index: 10;
  }

  img {
    height: 100%;
    width: 100%;
  }

  @media ${maxDevice.laptop} {
    img {
      max-height: 450px;

      object-fit: contain;
    }
  }
`;

const ExploreSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.ExploreSection'});

  return (
    <ExploreSectionWrapper className="vertical-spacing">
      <div className="section">
        <Row align="middle">
          <Col
            xs={{span: 24, order: 2}}
            sm={{span: 24, order: 2}}
            lg={{
              span: 12,
              order: 1,
            }}
          >
            <Image src={ControllersShelf} alt="Controllers shelf" />
          </Col>
          <Col
            xs={{span: 24, order: 1}}
            sm={{span: 24, order: 1}}
            lg={{
              span: 10,
              push: 2,
              order: 2,
            }}
          >
            <Space size={40} direction="vertical">
              <Title fontWeight={900}>{t('Title')}</Title>
              <Text className="semi-bold big" color={Colors.grey1}>
                {t('Description')}
              </Text>
            </Space>
          </Col>
        </Row>
      </div>
    </ExploreSectionWrapper>
  );
};

export default ExploreSection;
