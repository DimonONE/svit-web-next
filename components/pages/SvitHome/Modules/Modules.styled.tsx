import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const ModulesWrapper = styled.div`
  min-height: 800px;
  padding: 100px 0;
`;

export const SummaryPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PanelWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  border-radius: 50px;

  background: ${Colors.green};

  text-align: center;

  .tick-icon {
    height: 24px;
    width: 24px;
    margin-right: 5px;

    svg {
      height: inherit;
      width: inherit;
    }
  }
`;

export const ModulesGridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 24px;

  padding: 0;
  margin: 15px 0 0 0;

  list-style-type: none;

  @media ${maxDevice.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${maxDevice.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const ModulesGridItemWrapper = styled.li`
  display: flex;

  padding: 30px 50px 30px 10px;
  min-height: 250px;
  border-radius: 35px;

  background: ${Colors.grey3};

  @media ${maxDevice.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 25px;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 100%;

  img {
    height: auto;
    width: inherit;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding-left: 10px;

  .title {
    margin-bottom: 10px;
  }

  .item-number {
    margin-bottom: 25px;
  }

  .price {
    margin-bottom: 5px;
  }

  .description {
    margin-bottom: 25px;
  }

  @media ${maxDevice.laptop} {
    align-items: center;
  }
`;

export const BuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-btn {
    height: 35px;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media ${maxDevice.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    transition: 0.3s;

    path {
      transition: 0.3s;
    }

    &:hover {
      path {
        fill: ${Colors.grey1};
      }
    }
  }

  .count {
    margin: 0 10px;
  }

  @media ${maxDevice.laptop} {
    margin-bottom: 10px;
  }
`;
