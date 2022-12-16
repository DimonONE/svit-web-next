import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import gsap from 'gsap/dist/gsap';
import styled from 'styled-components';

import {Text} from '@custom-antd';

import {DoubleColRow} from '@molecules';

import AlexaIcon from '@assets/svit-home/overview/alexa.svg';
import Triangle from '@assets/svit-home/overview/cloud-tri.svg';
import GoogleIcon from '@assets/svit-home/overview/google.svg';
import SiriIcon from '@assets/svit-home/overview/siri.png';
import VoiceAssistantsImage from '@assets/svit-home/overview/voice-assistants.png';

import Colors from '@styles/Colors';
import {device, maxDevice} from '@styles/MediaQueries';
import Image from 'next/image';

const VoiceAssistantsSectionWrapper = styled.section``;

const ContentWrapper = styled.div`
  position: relative;

  min-height: 700px;
  padding: 85px 90px;
  border-radius: 35px;

  background-color: ${Colors.main};

  .content-image {
    position: absolute;
    bottom: 50px;
    left: 0;
    z-index: 0;

    max-height: 450px;
    width: 50%;
  }

  .content {
    display: flex;

    .description,
    .voice-assistance {
      flex: 1;
    }
  }

  @media ${maxDevice.laptop} {
    min-height: 600px;
    padding: 30px;

    .content-image {
      position: initial;

      width: 100%;
    }

    .content {
      flex-direction: column;
      gap: 20px;

      .description,
      .voice-assistance {
        flex: 1;
      }
    }
  }
`;

const VoiceAssistantsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

const ListItem = styled.li`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  &:not(:last-child) {
    margin-bottom: 100px;
  }

  span.custom-text {
    padding: 8px 20px;
    border-radius: 40px;
    min-height: 40px;

    background-color: ${Colors.white};

    text-align: center;
  }

  .cloud-triangle {
    position: absolute;
    right: 40px;
    top: 100%;
  }

  @media ${maxDevice.laptop} {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  @media ${device.laptop} {
    img {
      display: flex;
      flex: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Colors.white};
  border-radius: 50%;
  margin-right: 20px;
  min-width: 40px;

  img {
    height: 100%;
    width: 100%;
  }

  &.google {
    height: 38px;
    width: 38px;
    padding: 6px;
  }

  &.siri,
  &.alexa {
    height: 40px;
    width: 40px;
    padding: 4px;
  }
`;

const assistantsList = [
  {
    i18nKey: 'SiriText',
    className: 'siri',
    icon: SiriIcon,
  },
  {
    i18nKey: 'GoogleText',
    className: 'google',
    icon: GoogleIcon,
  },
  {
    i18nKey: 'AlexaText',
    className: 'alexa',
    icon: AlexaIcon,
  },
];

const VoiceAssistantsSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.VoiceAssistantsSection'});

  const renderedVoiceAssistants = assistantsList.map(assistant => {
    const {icon: Icon, i18nKey, className} = assistant;

    return (
      <ListItem key={i18nKey} className="assist-item">
        <ImageWrapper className={className}>
          <Image src={Icon} alt="Voice assistant" />
        </ImageWrapper>
        <Text>{t(i18nKey)}</Text>
        <Image src={Triangle} alt="Triangle" className="cloud-triangle" />
      </ListItem>
    );
  });

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLUListElement>('.assist-item');

    if (items) {
      items.forEach(item => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'bottom+=150 bottom',
          },
        });

        tl.fromTo(item, {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1});
      });
    }
  }, []);

  return (
    <VoiceAssistantsSectionWrapper className="vertical-spacing">
      <div className="section">
        <DoubleColRow
          leftContent={<Text className="biggest regular">{t('LeftTitle')}</Text>}
          rightContent={
            <Text color={Colors.grey1} className="big regular">
              {t('RightDescription')}
            </Text>
          }
        />
        <ContentWrapper className="content-wrapper">
          <div className="content">
            <div className="description">
              <Text className="biggest regular" color={Colors.white}>
                {t('ContentDescription')}
              </Text>
            </div>
            <div className="voice-assistance">
              <VoiceAssistantsList>{renderedVoiceAssistants}</VoiceAssistantsList>
            </div>
          </div>
          <Image src={VoiceAssistantsImage} alt="Voice assistants" className="content-image" />
        </ContentWrapper>
      </div>
    </VoiceAssistantsSectionWrapper>
  );
};

export default VoiceAssistantsSection;
