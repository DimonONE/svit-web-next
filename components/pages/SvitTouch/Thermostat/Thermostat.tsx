import {Helmet} from 'react-helmet';

import {CTABlock, HeroSection} from '@molecules';

import ThermostatHeroBG from '@assets/svit-touch/thermostat/thermostat-bg.jpg';

import {ThermostatWrapper} from './Thermostat.styled';
import {
  PlayTemperatureSection,
  SmartHomeIntegrationsSection,
  TapticEngineSection,
  ThermoScenariosSection,
  WoahSection,
} from './sections';

const Thermostat: React.FC = () => {
  return (
    <ThermostatWrapper>
      <Helmet>
        <title>Svit Touch - Thermostat</title>
      </Helmet>
      <HeroSection keyPrefix="SvitTouch.Thermostat.HeroSection" bg={ThermostatHeroBG} />
      <TapticEngineSection />
      <PlayTemperatureSection />
      <ThermoScenariosSection />
      <SmartHomeIntegrationsSection />
      <WoahSection />
      <CTABlock />
    </ThermostatWrapper>
  );
};

export default Thermostat;
