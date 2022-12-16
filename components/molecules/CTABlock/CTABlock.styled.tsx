import styled from 'styled-components';

import Colors from '@styles/Colors';

export const CTABlockWrapper = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  height: 330px;
  // padding: 40px 180px 40px 240px;

  background-color: ${Colors.darkGrey};

  .upper-text {
    display: block;

    width: 530px;
    margin-bottom: 20px;
  }
`;

export const BottomText = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftBlock = styled.div`
  // z-index: 2;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RightBlock = styled.div`
  position: relative;
  z-index: 2;

  display: flex;

  height: 100%;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.img-1 {
      right: 150px;
      z-index: 2;

      width: 250px;
      height: 250px;
    }

    &.img-2 {
      right: 0;
      z-index: 1;

      width: 200px;
      height: 200px;
    }
  }
`;

export const CirclesWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const Circle = styled.div`
  &.circle {
    position: absolute;
    z-index: 1;

    width: 200px;
    height: 200px;
    border-radius: 50%;

    background-color: ${Colors.main};

    filter: blur(90px);

    &.circle-1 {
      top: 0;
      left: 150px;
    }

    &.circle-2 {
      top: 50%;
      right: 150px;
    }

    &.circle-3 {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
