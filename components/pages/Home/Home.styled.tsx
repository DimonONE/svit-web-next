import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';
import { StaticImageData } from 'next/image';

export const HomeWrapper = styled.div`
  display: flex;

  height: 100vh;
  padding-top: 60px;

  background: ${Colors.black};

  a {
    flex: 1;

    height: 100%;
  }

  @media ${maxDevice.laptop} {
    flex-direction: column;

    padding-top: 84px;
  }
`;

export const Part = styled.div<{$bg?: StaticImageData; bgPosition?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  height: inherit;
  padding-top: 85px;

  background-image: url('${({$bg}) => $bg?.src}');
  background-repeat: no-repeat;
  background-position: ${({bgPosition}) => bgPosition};
  background-size: cover;

  transition: padding-top 0s, background-image 0.3s;

  span.biggest.bold {
    margin-top: 5px;
  }

  @media ${maxDevice.laptop} {
    align-items: flex-start;

    padding: 100px 30px 0 30px;
  }
`;

export const BottomText = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;
`;
