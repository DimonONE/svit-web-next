import {useContext} from 'react';
import Helmet from 'react-helmet';

import {HeroSection} from '@molecules';

// @ts-ignore
import SvitHomeOverviewVideo from '@assets/svit-home/overview/svit-home.mp4';

import {MainContext} from '@contexts';
import AboutHardSection from './sections/AboutHardSection';
import AboutHardSectionMobile from './sections/AboutHardSection/AboutHardSectionMobile';
import AutomateRoutineSection from './sections/AutomateRoutineSection';
import DownloadSection from './sections/DownloadSection';
import ExploreSection from './sections/ExploreSection';
import FeaturesSection from './sections/FeaturesSection';
import VoiceAssistantsSection from './sections/VoiceAssistantsSection';
import {Overlay, OverviewWrapper, Video} from './Overview.styled';

const Overview: React.FC = () => {
  const {isLaptop} = useContext(MainContext);

  return (
    <OverviewWrapper>
      <Helmet>
        <title>Svit - Smart Home</title>
      </Helmet>
      <HeroSection keyPrefix="SvitHome.Overview.HeroSection">
        <>
          <Video autoPlay muted loop controls={false} playsInline>
            <source src={SvitHomeOverviewVideo} type="video/mp4" />
          </Video>
          <Overlay />
        </>
      </HeroSection>
      <FeaturesSection />
      <ExploreSection />
      <DownloadSection />
      <AutomateRoutineSection />
      {isLaptop ? <AboutHardSectionMobile /> : <AboutHardSection />}
      <VoiceAssistantsSection />
    </OverviewWrapper>
  );
};

export default Overview;
