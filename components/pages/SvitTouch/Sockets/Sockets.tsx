import {HeroSection} from '@molecules';

import SocketsBG from '@assets/svit-touch/sockets/sockets-bg.jpg';

import {SocketsWrapper} from './Sockets.styled';
import SocketsOptionsSection from './sections/SocketsOptionsSection';

const Sockets: React.FC = () => {
  return (
    <SocketsWrapper>
      <HeroSection keyPrefix="SvitTouch.Sockets.HeroSection" bg={SocketsBG} />
      <SocketsOptionsSection />
    </SocketsWrapper>
  );
};

export default Sockets;
