import styled from 'styled-components';

import {maxDevice} from '@styles/MediaQueries';

export const SocketsOptionsSectionWrapper = styled.section``;

export const SocketsSliderWrapper = styled.div`
  overflow: auto;

  display: flex;
  justify-content: center;

  padding: 0 40px 20px 40px;

  @media ${maxDevice.laptopL} {
    justify-content: flex-start;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 20px;
  }

  img {
    height: 200px;
    width: auto;

    object-fit: contain;
  }
`;
