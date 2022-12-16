import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Text} from '@custom-antd';

import {DoubleColRow} from '@molecules';

import Colors from '@styles/Colors';

import {socketsSlides} from './utils';
import {SlideWrapper, SocketsOptionsSectionWrapper, SocketsSliderWrapper} from './SocketsOptionsSection.styled';

const SocketsOptionsSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Sockets.SocketsOptionsSection'});

  return (
    <SocketsOptionsSectionWrapper className="vertical-spacing">
      <div className="section">
        <DoubleColRow
          leftContent={<Text className="biggest regular">{t('LeftTitle')}</Text>}
          rightContent={
            <Text color={Colors.grey1} className="big regular">
              {t('RightDescription')}
            </Text>
          }
        />
      </div>
      <SocketsSliderWrapper>
        {socketsSlides.map((slide, index) => {
          const {src, i18nKey} = slide;

          const key = i18nKey + index;

          return (
            <SlideWrapper key={key}>
              <Image src={src} alt="" />
              <Text className="text-center big regular">{t(`${i18nKey}.Description`)}</Text>
            </SlideWrapper>
          );
        })}
      </SocketsSliderWrapper>
    </SocketsOptionsSectionWrapper>
  );
};

export default SocketsOptionsSection;
