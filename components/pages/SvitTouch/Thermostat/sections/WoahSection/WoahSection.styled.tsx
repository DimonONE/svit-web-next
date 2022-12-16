import styled from 'styled-components';

import PaperBG from '@assets/svit-touch/thermostat/paper-bg.jpg';

import {maxDevice} from '@styles/MediaQueries';

export const WoahSectionWrapper = styled.section`
  background-image: url(${PaperBG.src});
  background-repeat: no-repeat;
  background-size: cover;

  .row-image {
    width: 100%;
    height: 100%;
  }

  @media ${maxDevice.laptop} {
    .text-row {
      margin-top: 40px;
    }
  }
`;
