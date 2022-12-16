import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const TapticEngineWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${Colors.white};
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 120px;
  max-width: 1000px;

  span.biggest {
    max-width: 400px;
  }

  span.big {
    max-width: 500px;
  }
`;

export const BottomSection = styled.div`
  position: relative;
  overflow: hidden;
  transform: translateZ(0);

  display: flex;

  height: 720px;
  border-radius: 35px;

  video {
    position: absolute;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: left;
  }

  @media ${maxDevice.tablet} {
    min-height: 350px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  h1 {
    max-width: 272px;
    margin-bottom: 50px !important;
  }

  span {
    max-width: 330px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${maxDevice.laptop} {
    padding: 30px;
  }
`;
