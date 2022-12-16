import {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Col, Row, Space} from 'antd';

import debounce from 'lodash.debounce';

import {Text, Title} from '@custom-antd';

import Thermo15 from '@assets/svit-touch/thermostat/thermo-15.png';
import Thermo16 from '@assets/svit-touch/thermostat/thermo-16.png';
import Thermo17 from '@assets/svit-touch/thermostat/thermo-17.png';
import Thermo18 from '@assets/svit-touch/thermostat/thermo-18.png';
import Thermo19 from '@assets/svit-touch/thermostat/thermo-19.png';
import Thermo20 from '@assets/svit-touch/thermostat/thermo-20.png';
import Thermo21 from '@assets/svit-touch/thermostat/thermo-21.png';
import Thermo22 from '@assets/svit-touch/thermostat/thermo-22.png';
import Thermo23 from '@assets/svit-touch/thermostat/thermo-23.png';
import Thermo24 from '@assets/svit-touch/thermostat/thermo-24.png';
import Thermo25 from '@assets/svit-touch/thermostat/thermo-25.png';
import Thermo26 from '@assets/svit-touch/thermostat/thermo-26.png';

import Colors from '@styles/Colors';

import {PlayTemperaturePanelWrapper, PlayTemperatureSectionWrapper} from './PlayTemperatureSection.styled';

type PlayTemperaturePanelProps = {
  value: number;
};

const PlayTemperaturePanel: React.FC<PlayTemperaturePanelProps> = props => {
  const {value} = props;

  const imagesObject: any = {
    '15': Thermo15,
    '16': Thermo16,
    '17': Thermo17,
    '18': Thermo18,
    '19': Thermo19,
    '20': Thermo20,
    '21': Thermo21,
    '22': Thermo22,
    '23': Thermo23,
    '24': Thermo24,
    '25': Thermo25,
    '26': Thermo26,
  };

  return (
    <PlayTemperaturePanelWrapper>
      {Object.entries(imagesObject).map(([key, val]: any) => {
        return (
          <Image
            src={val}
            alt={`Play Temperature Panel-${val}`}
            className="play-temperature-panel"
            style={{position: 'relative', display: key === String(value) ? 'initial' : 'none'}}
            key={key}
          />
        );
      })}
    </PlayTemperaturePanelWrapper>
  );
};

const PlayTemperatureSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Thermostat.PlayTemperatureSection'});

  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const [currentXValue, setXValue] = useState(15);
  const [draggablePosition, setDraggablePosition] = useState(0);

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        setXValue(15);
        setDraggablePosition(0);
      }, 300)
    );
  }, []);

  return (
    <PlayTemperatureSectionWrapper className="vertical-spacing">
      <div className="section">
        <Row gutter={[40, 60]}>
          <Col
            lg={{
              span: 12,
            }}
            md={{span: 24}}
            xs={{span: 24}}
          >
            <Space size={40} direction="vertical" style={{width: '100%'}}>
              <Title color={Colors.black} fontWeight={800}>
                {t('Title')}
              </Title>
              <Text className="regular big" color={Colors.grey1}>
                {t('Description')}
              </Text>
              <div className="slider-wrapper" ref={sliderWrapperRef}>
                <div className="slider">
                  <Draggable
                    axis="x"
                    onDrag={(e, data) => {
                      // @ts-ignore
                      const sliderWrapperRefWidth = sliderWrapperRef.current?.offsetWidth - 55;

                      // @ts-ignore
                      const onePercentValue = sliderWrapperRefWidth / 100;

                      // @ts-ignore
                      const temperaturePercent = Number((data.x / onePercentValue).toFixed(0));

                      setDraggablePosition(data.x);

                      if (temperaturePercent <= 8) {
                        setXValue(15);
                      } else if (temperaturePercent >= 8 && temperaturePercent < 16) {
                        setXValue(16);
                      } else if (temperaturePercent >= 16 && temperaturePercent < 24) {
                        setXValue(17);
                      } else if (temperaturePercent >= 24 && temperaturePercent < 32) {
                        setXValue(18);
                      } else if (temperaturePercent >= 32 && temperaturePercent < 40) {
                        setXValue(19);
                      } else if (temperaturePercent >= 40 && temperaturePercent < 48) {
                        setXValue(20);
                      } else if (temperaturePercent >= 48 && temperaturePercent < 56) {
                        setXValue(21);
                      } else if (temperaturePercent >= 56 && temperaturePercent < 64) {
                        setXValue(22);
                      } else if (temperaturePercent >= 64 && temperaturePercent < 72) {
                        setXValue(23);
                      } else if (temperaturePercent >= 72 && temperaturePercent < 80) {
                        setXValue(24);
                      } else if (temperaturePercent >= 80 && temperaturePercent < 88) {
                        setXValue(25);
                      } else {
                        setXValue(26);
                      }
                    }}
                    position={{x: draggablePosition, y: 0}}
                    bounds=".slider"
                  >
                    <div className="circle" />
                  </Draggable>
                  <div className="slider-bg" />
                </div>
              </div>
            </Space>
          </Col>
          <Col
            lg={{
              span: 12,
            }}
            md={{span: 24}}
            xs={{span: 24}}
          >
            <PlayTemperaturePanel value={currentXValue} />
          </Col>
        </Row>
      </div>
    </PlayTemperatureSectionWrapper>
  );
};

export default PlayTemperatureSection;
