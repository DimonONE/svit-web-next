import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Text} from '@custom-antd';

import {IconsInARow} from '@molecules';

import PanelBlack from '@assets/svit-touch/keypads/panel-black.png';
import PanelWhite from '@assets/svit-touch/keypads/panel-white.png';

import Colors from '@styles/Colors';

import {MobileChooseSectionWrapper, MobileFooter, MobilePart} from './ChooseSection.styled';

const MobileChooseSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.ChooseSection'});

  return (
    <MobileChooseSectionWrapper>
      <MobilePart className="top">
        <div className="text-wrapper">
          <Text className="big semi-bold" color={Colors.grey1}>
            {t('TitleLeft')}
            <br />
            {t('TitleRight')}
          </Text>
        </div>
        <div className="image-wrapper">
          <Image src={PanelWhite} alt='PanelWhite'/>
        </div>
      </MobilePart>
      <MobilePart className="bottom">
        <div className="image-wrapper">
          <Image src={PanelBlack} alt='PanelBlack' />
        </div>
        <div className="text-wrapper">
          <Text className="big semi-bold" color={Colors.black}>
            {t('LeftPanel')} {t('And')} {t('RightPanel')}
          </Text>
        </div>
      </MobilePart>
      <MobileFooter>
        <IconsInARow color="dark" className="black" />
      </MobileFooter>
    </MobileChooseSectionWrapper>
  );
};

export default MobileChooseSection;
