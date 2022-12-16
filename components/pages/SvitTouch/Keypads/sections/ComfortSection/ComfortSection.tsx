import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';

import {Text, Title} from '@custom-antd';

import Colors from '@styles/Colors';

import {ComfortSectionWrapper, ContentWrapper, StyledBulb} from './ComfortSection.styled';

const bulbsCount = 80;

function calculateDistance(elem: HTMLLIElement, mouseX: number, mouseY: number) {
  return Math.floor(
    Math.sqrt(
      (mouseX - (elem.offsetLeft + elem.offsetWidth / 2)) ** 2 +
        (mouseY - (elem.offsetTop + elem.offsetHeight / 2)) ** 2
    )
  );
}

const Bulbs: React.FC = () => {
  return (
    <ul
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        alignItems: 'center',
        justifyItems: 'center',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        zIndex: 1,
      }}
      id="bulbs-list"
    >
      {Array(bulbsCount)
        .fill(0)
        .map((_, index) => {
          const key = `bulb-${index}`;

          return (
            <p key={key}>
              <StyledBulb />
            </p>
          );
        })}
    </ul>
  );
};

const maximumDistance = 415;

const ComfortSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.ComfortSection'});

  const ref = useRef(null);

  const fromPercent = (valNum: any) => {
    const decimalValue = Math.round((valNum * 255) / 100);

    let hexValue;

    if (valNum < 7) {
      hexValue = `0${decimalValue.toString(16).toUpperCase()}`;
    } else {
      hexValue = decimalValue.toString(16).toUpperCase();
    }

    return String(hexValue);
  };

  useEffect(() => {
    const list = document.getElementById('bulbs-list');
    const liItems = list?.getElementsByTagName('li');
    const rect = list?.getBoundingClientRect();

    const onMouseMove = (event: MouseEvent) => {
      if (liItems?.length && rect) {
        const mX = event.pageX;
        const mY = event.pageY;

        // eslint-disable-next-line no-restricted-syntax
        for (const currentItem of liItems) {
          const distanceToElement = calculateDistance(currentItem, mX - rect?.left, mY - rect?.top);

          if (distanceToElement >= maximumDistance) {
            currentItem.style.background = 'rgba(28, 28, 28, 100)';
            currentItem.style.boxShadow = 'none';
          } else {
            const opacityValue = (1 - distanceToElement / maximumDistance) * 100;

            currentItem.style.background = `rgba(233, 233, 233, ${opacityValue}%)`;
            currentItem.style.boxShadow = `0px 0px 14px 2px #ffffff${fromPercent(opacityValue.toFixed())}`;
          }
        }
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <ComfortSectionWrapper>
      <Bulbs />
      <ContentWrapper direction="vertical">
        <div className="vertical-spacing">
          <div className="section">
            <Title color={Colors.white} fontWeight={800}>
              {t('Title')}
            </Title>
            <Text className="big" color={Colors.grey1}>
              {t('Description')}
            </Text>
          </div>
        </div>
      </ContentWrapper>
    </ComfortSectionWrapper>
  );
};

export default ComfortSection;
