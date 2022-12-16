import {Text} from '@custom-antd';
import ScrollDownIcon from '@assets/scroll-down-icon.svg';
import Colors from '@styles/Colors';

import {ScrollDownWrapper} from './HeroSection.styled';

const ScrollDown: React.FC = () => {
  return (
    <ScrollDownWrapper>
      <Text className="small regular text-center" color={Colors.white}>
        Scroll Down
      </Text>
      <ScrollDownIcon />
    </ScrollDownWrapper>
  );
};

export default ScrollDown;
