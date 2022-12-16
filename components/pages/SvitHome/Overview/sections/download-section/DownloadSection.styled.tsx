import styled from 'styled-components';

import DownloadBG from '@assets/svit-home/overview/download-bg.jpg';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const DownloadSectionWrapper = styled.section`
  overflow: hidden;

  display: flex;

  height: 100vh;

  background-image: url(${DownloadBG.src});
  background-repeat: no-repeat;
  background-size: cover;

  .section {
    display: flex;
  }

  .custom-text {
    display: block;

    width: 600px;

    text-align: center;
  }

  @media ${maxDevice.laptop} {
    align-items: flex-start;

    height: 800px;

    background-position: 25% 180px;

    .custom-text {
      display: inline-block;

      width: unset;

      text-align: initial;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 1;

  @media ${maxDevice.laptop} {
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 160px;
  width: 160px;
  border-radius: 45px;

  background-color: ${Colors.black};

  img {
    height: 120px;
  }

  @media ${maxDevice.laptop} {
    height: 90px;
    width: 90px;

    border-radius: 25px;

    img {
      height: 65px;
      width: 35px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;

  a {
    img {
      height: 55px;
    }
  }

  @media ${maxDevice.tablet} {
    flex-direction: column;
  }
`;
