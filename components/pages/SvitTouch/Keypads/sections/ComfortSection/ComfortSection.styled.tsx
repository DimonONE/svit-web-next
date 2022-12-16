import {Space} from 'antd';

import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const StyledBulb = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 4px;

  background: rgba(28, 28, 28, 100);
`;

export const ComfortSectionWrapper = styled.section`
  position: relative;

  height: 100vh;

  background: ${Colors.darkGrey};
`;

export const ContentWrapper = styled(Space)`
  position: absolute;
  z-index: 5;

  justify-content: center;

  width: 100%;
  height: 100%;

  h1 {
    max-width: 850px;
    margin-bottom: 60px;
  }

  span {
    display: block;

    max-width: 500px;
  }

  @media ${maxDevice.laptop} {
    h1,
    span {
      max-width: unset;

      text-align: center;
    }
  }
`;
