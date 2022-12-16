import styled from 'styled-components';

import Colors from '@styles/Colors';

export const UpperWrapper = styled.section`
  background: #1d1d1d;
`;

export const DecompositionSectionWrapper = styled.section`
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: calc(100vh - 60px);

  .decompose-upper-wrapper {
    position: relative;

    display: flex;

    width: 900px;
    height: 70%;

    .explain-block {
      display: flex;
      flex-direction: column;

      width: 235px;

      opacity: 0;

      .line {
        position: absolute;
        bottom: -30px;
        right: 0;

        height: 1px;

        background-color: ${Colors.white};
      }
    }

    .image-wrapper {
      position: absolute;
      left: 0%;
      transform: translate(-75%, 0px) !important;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;

      img {
        width: auto;
        height: 100%;
      }

      .children-item {
        position: absolute;

        &.image-1-1 {
          bottom: 12px;
          transform: rotate(-2deg);

          width: 100px;
        }

        &.image-5-1 {
          bottom: 8px;
          transform: rotate(-9deg);
        }
      }
    }
  }
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 100px 150px;

  background: #1d1d1d;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;
