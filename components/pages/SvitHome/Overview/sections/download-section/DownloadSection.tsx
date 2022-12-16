import {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import {Text, Title} from '@custom-antd';

import SvitLogoShort from '@assets/svit-logo-short.svg';

import Colors from '@styles/Colors';

import {MainContext} from '@contexts';
import DownloadUA from './DownloadUA';
import DownloadENG from './DownloadENG';
import {ButtonsWrapper, ContentWrapper, DownloadSectionWrapper, LogoWrapper} from './DownloadSection.styled';

const languageToLinks: any = {
  EN: <DownloadENG />,
  UKR: <DownloadUA />,
};

const DownloadSection: React.FC = () => {
  const {currentLanguage} = useContext(MainContext);
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.DownloadSection'});

  return (
    <DownloadSectionWrapper className="vertical-spacing">
      <div className="section">
        <ContentWrapper>
          <LogoWrapper>
            <Image src={SvitLogoShort} alt="" />
          </LogoWrapper>
          <Title fontWeight={800} color={Colors.black}>
            {t('AllInOneTitle')}
          </Title>
          <Text color={Colors.grey1}>{t('AllInOneDescription')}</Text>
          <ButtonsWrapper>{languageToLinks[currentLanguage]}</ButtonsWrapper>
        </ContentWrapper>
      </div>
    </DownloadSectionWrapper>
  );
};

export default DownloadSection;
