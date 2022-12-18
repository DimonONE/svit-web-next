import styled from 'styled-components';

import AboutUsBG from '@assets/about-us/about-us-bg.jpg';

import { maxDevice } from '@styles/MediaQueries';

export const AboutUsWrapper = styled.div`
  .section {
    padding-top: 45px;
  }

  .quote-wrapper {
    position: relative;
    z-index: 10;

    .svit-logo {
      position: absolute;
      z-index: 0;
      top: -70px;
      left: 40px;

      width: auto;
      height: auto;
    }
  }
`;

export const BottomFrame = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  height: 600px;
  border-radius: 35px;

  background-image: url('${AboutUsBG.src}');
  background-repeat: no-repeat;
  background-size: cover;

  @media ${maxDevice.laptop} {
    height: 350px;
  }
`;

export const QuoteWrapper = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  padding: 50px 20px 0 20px;

  .custom-text {
    max-width: 400px;

    text-align: center;
  }
`;
