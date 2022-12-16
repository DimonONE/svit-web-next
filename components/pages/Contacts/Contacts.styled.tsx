import styled from 'styled-components';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

export const ContactsWrapper = styled.div`
  height: 1100px;

  .section {
    padding-top: 45px;
  }

  @media ${maxDevice.laptop} {
    height: unset;
  }
`;

export const MapFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  height: 600px;
  border-radius: 35px;

  @media ${maxDevice.laptop} {
    height: 350px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;

  a {
    color: ${Colors.black};
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  width: 40px;

  margin-right: 10px;

  svg {
    width: 40px;
  }
`;
