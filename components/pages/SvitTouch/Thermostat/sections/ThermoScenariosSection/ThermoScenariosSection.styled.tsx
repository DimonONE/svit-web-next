import styled from 'styled-components';

import Colors from '@styles/Colors';

export const ThermoScenariosSectionWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 1100px;

  .vertical-spacing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
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

  span.ant-typography {
    width: 350px;
  }
`;

export const LowerBlock = styled.div`
  position: relative;
  z-index: 3;

  display: flex;

  width: 100%;
  margin: 0 auto;

  .ant-row {
    width: 100%;
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

export const ScenariosListItem = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 20px;

  border-left: 1px solid ${Colors.white};
`;
