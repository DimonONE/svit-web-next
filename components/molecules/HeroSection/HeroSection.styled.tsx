import styled from 'styled-components';
import { StaticImageData } from 'next/image';

import {Button} from '@custom-antd';

import {maxDevice} from '@styles/MediaQueries';

export const HeroSectionWrapper = styled.section<{$bg?: StaticImageData}>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;

  .section {
    position: relative;

    z-index: 3;
  }

  ${({$bg}) =>
    $bg
      ? `background-image: url(${$bg?.src});
         background-repeat: no-repeat;
         background-size: cover;
         background-position: right;`
      : 'background: #1d1d1d;'}

  @media ${maxDevice.laptop} {
    justify-content: flex-end;

    h1.svit-title,
    h2.svit-title {
      text-align: center;
    }

    .section {
      padding-bottom: 20px;
    }

    h1.svit-title {
      margin-bottom: 15px;
    }

    h2.svit-title {
      margin-bottom: 10px;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 825px;

  margin: 15px 0px 35px 0px;

  @media ${maxDevice.laptop} {
    max-width: unset;

    margin: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: left;

  @media ${maxDevice.laptop} {
    text-align: center;
  }
`;

export const HeroSectionButton = styled(Button)`
  min-width: 180px;
`;

export const ScrollDownWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 35px;

  @media ${maxDevice.laptop} {
    display: none;
  }
`;
