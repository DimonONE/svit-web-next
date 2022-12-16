import {Space} from 'antd';

import styled from 'styled-components';

import {device, maxDevice} from '@styles/MediaQueries';

export const WoahSectionWrapper = styled.section`
  padding: 150px 0;

  .section {
    @media ${maxDevice.laptopL} {
      flex-direction: column;
      align-items: center;
    }
  }

  @media ${maxDevice.laptopL} {
    padding: 50px 0;
  }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 400px;

  height: 100%;

  .panel-frame-wrapper {
    position: relative;

    height: 600px;
    width: 300px;
    margin-top: 55px;

    .panel,
    .panel-frame {
      position: absolute;

      width: 255px;
    }

    .panel {
      top: 0;
      left: 0;
      z-index: 2;
    }

    .panel-frame {
      top: 65px;
      left: 65px;
      z-index: 1;
    }
  }
`;

export const RightPart = styled(Space)`
  flex: 2;
`;

export const RightPartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 10px;

  @media ${maxDevice.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  @media ${device.mobileL} and ${maxDevice.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} and ${maxDevice.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${maxDevice.laptopL} {
    gap: 50px 40px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;

  @media ${maxDevice.mobileL} {
    text-align: center;
  }
`;

export const BGWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transform: translateZ(0);

  display: flex;

  height: 500px;
  border-radius: 35px;

  img {
    position: absolute;

    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: left;
  }

  @media ${maxDevice.laptop} {
    flex-direction: column;

    height: 1000px;

    img {
      height: unset;

      object-position: top;
    }
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

  @media ${maxDevice.laptop} {
    padding: 30px;
  }
`;
