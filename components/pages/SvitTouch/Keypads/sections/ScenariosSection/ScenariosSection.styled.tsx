import styled from 'styled-components';

import Colors from '@styles/Colors';

// import Colors from '@styles/Colors';

export const ScenariosSectionWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 1100px;
`;

export const ImagesBlock = styled.div`
  position: absolute;

  width: 100%;
  height: 1100px;

  img {
    position: absolute;

    width: 100%;
    height: 1100px;

    object-fit: cover;
  }
`;

export const UpperBlock = styled.div`
  position: relative;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin: 0 auto;
  padding-top: 80px;

  h1 {
    width: 500px;
    padding-right: 55px;

    border-right: 1px solid ${Colors.grey2};
  }

  span.ant-typography {
    width: 380px;
    padding-left: 55px;
  }
`;

export const UpperBlockBG = styled.div`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 500px;

  img {
    position: absolute;

    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;

  &.scenario-footer {
    display: flex;
    align-items: center;

    padding-top: 30px;

    span.ant-typography {
      width: 200px;
      padding-left: 20px;
    }
  }
`;
