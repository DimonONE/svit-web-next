import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

import gsap from 'gsap/dist/gsap';

import {Text} from '@custom-antd';

import {IconsInARow} from '@molecules';

import PanelBlack from '@assets/svit-touch/keypads/panel-black.png';
import PanelWhite from '@assets/svit-touch/keypads/panel-white.png';

import Colors from '@styles/Colors';

import {ChooseSectionWrapper, Content, Footer, Header, InnerContent, Panel, Part} from './ChooseSection.styled';

const ChooseSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitTouch.Keypads.ChooseSection'});

  useEffect(() => {
    const iconsBlocks = gsap.utils.toArray<HTMLDivElement>('.images-block');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        scrub: 0.5,
        end: 'bottom+=100 top',
        start: 'bottom-=100 bottom',
      },
    });

    tl.fromTo(
      iconsBlocks,
      {
        x: -150,
      },
      {
        x: 150,
        duration: 5,
        ease: 'none',
      }
    );
  }, []);

  return (
    <ChooseSectionWrapper>
      <Content>
        <Part className="left">
          <Header className="left">
            <Text className="biggest semi-bold" color={Colors.grey1}>
              {t('TitleLeft')}
            </Text>
          </Header>
          <InnerContent className="white">
            <Text color={Colors.white}>{t('LeftPanel')}</Text>
            <Panel>
              <Image src={PanelWhite} alt='PanelWhite' />
            </Panel>
          </InnerContent>
        </Part>
        <Part className="right">
          <Header className="right">
            <Text className="biggest semi-bold" color={Colors.grey1}>
              {t('TitleRight')}
            </Text>
          </Header>
          <InnerContent className="black">
            <Text color={Colors.black}>{t('RightPanel')}</Text>
            <Panel>
              <Image src={PanelBlack} alt='PanelBlack'/>
            </Panel>
          </InnerContent>
        </Part>
      </Content>
      <Footer className="footer">
        <IconsInARow color="light" className="white" />
        <IconsInARow color="dark" className="black" />
      </Footer>
    </ChooseSectionWrapper>
  );
};

export default ChooseSection;
