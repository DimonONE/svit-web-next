import {CSSProperties} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Col, Row} from 'antd';

import Icon from '@ant-design/icons';
import {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon';

import {Text} from '@custom-antd';

import ChevronRight from '@assets/icons/chevron-right.svg';
import PlugBlack from '@assets/plug-black.png';
import PlugWhite from '@assets/plug-white.png';

import Colors from '@styles/Colors';

import {BottomText, CTABlockWrapper, Circle, CirclesWrapper, LeftBlock, RightBlock} from './CTABlock.styled';

export const ChevronRightIcon: React.FC<Partial<CustomIconComponentProps>> = props => {
  return <Icon component={ChevronRight} {...props} />;
};

const iconStyle: CSSProperties = {
  marginLeft: 5,
  padding: 3,
  borderRadius: '50%',
  backgroundColor: Colors.grey1,
  fontSize: 14,
};

const CTABlock: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'CTABlock'});

  return (
    <CTABlockWrapper>
      <CirclesWrapper>
        <Circle className="circle circle-1" />
        <Circle className="circle circle-2" />
        <Circle className="circle circle-3" />
      </CirclesWrapper>
      <div className="section">
        <Row>
          <Col span={12}>
            <LeftBlock>
              <Text className="biggest semi-bold upper-text" color={Colors.white}>
                {t('Title')}
              </Text>
              <BottomText className="clickable">
                <Text className="big bold" color={Colors.white} onClick={() => {}}>
                  {t('CTAText')}
                </Text>
                <ChevronRightIcon style={iconStyle} />
              </BottomText>
            </LeftBlock>
          </Col>
          <Col span={12}>
            <RightBlock>
              <Image src={PlugBlack} className="img-1" alt='PlugBlack' />
              <Image src={PlugWhite} className="img-2" alt='PlugWhite' />
            </RightBlock>{' '}
          </Col>
        </Row>
      </div>
    </CTABlockWrapper>
  );
};

export default CTABlock;
