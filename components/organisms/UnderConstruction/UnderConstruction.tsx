import {CSSProperties, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';

import {CloseOutlined} from '@ant-design/icons';

import gsap, {Power3} from 'gsap/dist/gsap';

import {Text} from '@custom-antd';

import Colors from '@styles/Colors';

import {UnderConstructionWrapper} from './UnderConstruction.styled';

const iconStyles: CSSProperties = {color: Colors.white, fontSize: 20, marginLeft: 15};

const UnderConstruction: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'UnderConstruction'});

  const ref = useRef<HTMLDivElement>(null);

  const onPanelClick = () => {
    gsap.to(ref.current, {
      yPercent: 100,
      duration: 0.5,
      display: 'none',
    });
  };

  const onMouseEnter = () => {
    gsap.to(ref.current, {
      background: Colors.darkGrey,
      duration: 0.3,
    });
  };

  const onMouseLeave = () => {
    gsap.to(ref.current, {
      background: Colors.main,
      duration: 0.3,
    });
  };

  useEffect(() => {
    if (ref && ref.current) {
      gsap.from(ref.current, {
        yPercent: 100,
        duration: 0.5,
        delay: 0.5,
        ease: Power3.easeOut,
      });
    }
  }, []);

  return (
    <UnderConstructionWrapper ref={ref} onClick={onPanelClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Text className="regular big" color={Colors.white}>
        {t('Text')}
      </Text>
      <CloseOutlined style={iconStyles} />
    </UnderConstructionWrapper>
  );
};

export default UnderConstruction;
