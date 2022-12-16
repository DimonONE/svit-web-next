import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const AutomateRoutineSectionWrapper = styled.section``;

export const PhoneWrapper = styled.div`
  position: relative;

  width: 360px;

  .text {
    position: absolute;
    top: 75px;

    width: 470px;
  }

  @media ${maxDevice.laptop} {
    width: unset;

    .text {
      width: 330px;
    }
  }
`;

export const PhoneInnerWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;

    object-fit: contain;
  }

  @media ${maxDevice.laptop} {
    img {
      width: 300px;
    }
  }

  @media ${maxDevice.tablet} {
    img {
      width: 250px;
    }
  }
`;

export const AutoRoutineSpace = styled.div`
  display: flex;
  gap: 100px;

  @media ${maxDevice.laptop} {
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
`;

export const DescriptionWrapper = styled.div`
  flex: 1;

  margin-top: 75px;

  @media ${maxDevice.laptop} {
    margin-top: unset;
  }
`;

export const GreyWrapper = styled.div<{unsetHeight?: boolean}>`
  position: relative;
  overflow: hidden;

  display: flex;
  // align-items: flex-end;

  height: ${({unsetHeight}) => (unsetHeight ? 'unset' : '250px')};
  padding: 30px;

  background: ${Colors.grey3};

  border-radius: 35px;

  .cell-title {
    padding-bottom: 20px;

    color: ${Colors.main};

    font-size: 132px;
    line-height: 175px;
  }

  .cell-text {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: flex-end;

    height: 100%;
    width: 100%;
    padding: 30px;
    border-radius: 35px;

    background: linear-gradient(0deg, rgba(239, 239, 239, 1) 30%, rgba(255, 255, 255, 0) 80%);
  }
`;

export const AutomateOptionsList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

export const AutomateOptionsListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  svg {
    width: 40px;

    margin-right: 10px;
  }
`;
