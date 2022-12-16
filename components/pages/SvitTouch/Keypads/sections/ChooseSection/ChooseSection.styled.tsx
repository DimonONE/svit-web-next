import styled from 'styled-components';

import Colors from '@styles/Colors';

export const ChooseSectionWrapper = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: absolute;
  top: 100px;

  &.left {
    right: 5px;
  }

  &.right {
    left: 5px;
  }
`;

export const Content = styled.div`
  display: flex;

  height: inherit;
`;

export const Part = styled.div`
  position: relative;

  flex: 1;

  min-height: 100vh;
  padding-top: 200px;

  &.left {
    background: ${Colors.black};
  }

  &.right {
    background: ${Colors.grey3};
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;

  padding-bottom: 150px;

  &.black {
    filter: drop-shadow(0px 42px 84px rgba(0, 0, 0, 0.45));
  }
`;

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  height: 100%;
  width: 300px;

  img {
    height: 100%;
    width: 100%;

    object-fit: contain;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex: 1;

  width: 100%;

  .footer-icons {
    width: 100%;
    height: 50px;

    .images-block {
      display: flex;

      width: 100%;

      span {
        margin-right: 80px;
      }
    }

    &.icon-black {
      position: absolute;
      overflow-x: hidden;
      transform: translate(50%, 0px);
      z-index: 5;

      .images-block {
        transform: translate(-50%, 0px);
      }
    }
  }
`;

export const MobileFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  flex: 1;

  width: 100%;

  .images-block {
    display: flex;
    flex-wrap: nowrap;

    span:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const MobileChooseSectionWrapper = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  height: 750px;
`;

export const MobilePart = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  .text-wrapper {
    width: 100%;
  }

  .image-wrapper {
    position: relative;

    display: flex;
    justify-content: center;

    height: 100%;

    img {
      height: auto;
    }
  }

  .text-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    text-align: center;
  }

  &.top {
    background: black;

    .text-wrapper {
      top: 90px;
    }

    .image-wrapper {
      transform: translateY(50%);
    }
  }

  &.bottom {
    background: white;

    .text-wrapper {
      bottom: 140px;
    }

    .image-wrapper {
      transform: translateY(-50%);
    }
  }
`;

export const ImageWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100px;

  text-align: center;
`;
