import styled from 'styled-components';

import Colors from '@styles/Colors';

export const FooterWrapper = styled.footer`
  padding: 40px 0;

  background: ${Colors.grey3};

  .svit-logo-footer {
    height: 55px;
    width: 130px;
    margin-bottom: 10px;

    path {
      fill: ${Colors.black};
    }
  }
`;

export const ChildItemsList = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 8px 0 0 0;
  padding: 0;

  list-style-type: none;
`;

export const ChildItemWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  color: ${Colors.grey1};

  a {
    display: flex;
    align-items: center;

    height: 100%;

    color: ${Colors.grey1};

    cursor: pointer;

    &.active {
      text-decoration: underline;
    }
  }

  &:hover {
    a {
      color: ${Colors.grey1};

      text-decoration: underline;
    }
  }
`;
