import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const SizeSectionWrapper = styled.section`
  position: relative;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  height: 1000px;

  @media ${maxDevice.laptop} {
    height: 750px;
  }

  @media ${maxDevice.tablet} {
    height: 550px;
  }

  @media ${maxDevice.mobileS} {
    height: 450px;
  }

  @media ${maxDevice.mobileS} {
    height: 350px;
  }
`;

export const Header = styled.div`
  position: absolute;
  top: 100px;
  z-index: 1;

  &.left {
    right: 5px;
  }

  &.right {
    left: 5px;
  }

  @media ${maxDevice.tablet} {
    top: 75px;
  }
`;

export const Content = styled.div`
  position: relative;

  display: flex;

  height: inherit;
`;

export const Part = styled.div`
  position: absolute;
  z-index: 1;

  flex: 1;

  padding-top: 200px;

  &.left {
    background: ${Colors.white};
  }

  &.right {
    background: ${Colors.black};
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;
`;

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  height: 500px;
  width: 250px;

  color: red;
  border: 2px solid red;
`;

export const Section = styled.div`
  position: absolute;

  &.comparison-section {
    position: absolute;
    overflow: hidden;

    height: inherit;
    width: 100%;

    &.left {
      transform: translateX(-50%);

      background-color: ${Colors.grey3};

      .to {
        background-color: ${Colors.black};
      }

      img {
        transform: translateX(50%);
      }
    }

    &.right {
      transform: translateX(50%);

      background-color: ${Colors.black};

      .to {
        background-color: ${Colors.grey3};
      }

      img {
        filter: drop-shadow(0px 42px 84px rgba(0, 0, 0, 0.45));

        transform: translateX(-50%);
      }
    }

    .comparison-image {
      position: absolute;
      overflow: hidden;

      width: 100%;
      height: 100%;

      img {
        top: 0;

        width: 100%;
        height: 100%;

        object-fit: contain;
      }
    }
  }
`;
