import styled from 'styled-components';

import Colors from '@styles/Colors';

export const NavigationContainer = styled.nav<{$isMobile?: boolean; $isOpen?: boolean}>`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;

  ${({$isMobile}) =>
    $isMobile
      ? `
        flex-direction: column;

        &.scrolled-nav {
          background: ${Colors.black};
        }

        &.nav {
          background: transparent;
        }
        `
      : `
        align-items: center;
        justify-content: center;
        gap: 50px;

        height: 60px;
        padding: 0 20px;

        &.scrolled-nav,
        &:hover {
          background: ${Colors.black};
        }
        `}

  ${({$isOpen}) => ($isOpen ? 'height: 100%;' : '')}
  width: 100%;

  transition: 0.3s ease;

  &.nav {
    &:hover {
      background: ${Colors.black};
    }
  }
`;

export const NavigationListWrapper = styled.ul<{bgColor?: string; gap?: number; height?: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({gap}) => gap}px;

  height: ${({height}) => height}px;
  width: 100%;
  margin: 0;
  padding: 0;

  background-color: ${({bgColor}) => bgColor};

  list-style-type: none;
  transition: 0.3s ease;
`;

export const NavigationListItemWrapper = styled.li<{color?: string; $isRoot?: boolean}>`
  display: flex;
  align-items: center;

  height: 100%;

  color: ${({color}) => color};

  cursor: pointer;

  a:hover {
    color: #fff;
  }

  &:hover {
    text-decoration: underline;

    transition: 0.3s;

    a {
      ${({$isRoot}) => ($isRoot ? 'text-decoration: underline;' : `color: ${Colors.main};`)}

      svg.route-icon {
        path {
          fill: ${Colors.main};
        }
      }
    }
  }

  a {
    display: flex;
    align-items: center;

    height: 100%;

    color: ${({color}) => color};

    &.active {
      color: ${({$isRoot}) => ($isRoot ? Colors.grey1 : Colors.main)};

      svg.route-icon {
        path {
          fill: ${Colors.main};
        }
      }
    }

    svg.route-icon {
      margin-right: 10px;

      path {
        fill: ${Colors.black};

        transition: 0.3s;
      }
    }
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-grow: 0;

  width: 100%;
  padding: 15px;
`;

export const HamburgerWrapper = styled.div`
  flex-basis: 100px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    height: 100%;

    svg {
      height: 48px;
      width: 100%;
    }
  }
`;

export const ActionsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 100px;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

export const ActionsListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavigationMobListWrapper = styled.div<{$isMenuOpen?: boolean}>`
  overflow-y: auto;

  display: flex;
  width: 200%;
  height: 100%;
  padding: ${({$isMenuOpen}) => ($isMenuOpen ? '30px 0 0 0' : '0px')};
`;

export const NavList = styled.ul<{$isMenuOpen?: boolean; $isRoot?: boolean}>`
  ${({$isRoot}) => ($isRoot ? 'overflow: auto;' : '')}

  flex: 1;

  display: flex;
  flex-direction: column;

  padding: ${({$isMenuOpen}) => ($isMenuOpen ? ' 0 30px 30px 30px' : '0px')};
  margin: 0;

  list-style-type: none;
`;

export const NavListItem = styled.li`
  display: flex;

  a {
    display: flex;
    align-items: center;

    width: 100%;

    svg {
      margin-right: 15px;
    }

    &.active {
      svg {
        path {
          fill: ${Colors.grey1};
        }
      }
    }
  }

  &.other,
  &.back-btn,
  &.with-child {
    cursor: pointer;
  }

  &.back-btn {
    align-items: center;

    svg {
      height: 100%;
      width: auto;
      margin-right: 10px;

      transform: rotate(180deg);

      path {
        fill: ${Colors.grey1};
      }
    }
  }

  &.with-child {
    justify-content: space-between;
    align-items: center;

    svg {
      height: 100%;
      width: auto;
    }
  }

  &.other {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  &:not(.lang):active,
  &:not(.lang):focus {
    span,
    svg > path {
      transition: 0.05s;
    }

    span {
      color: ${Colors.white50} !important;
    }

    svg {
      path {
        fill: ${Colors.white50};
      }
    }
  }

  &:not(:last-child):not(.other) {
    margin-bottom: 32px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 20px;
  width: 20px;
`;

export const LanguagesWrapper = styled.ul`
  display: flex;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;
export const SocialsWrapper = styled.ul`
  padding: 0;
  margin: 0;

  list-style-type: none;
`;

export const BuyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  padding: 25px;
`;

export const LaptopBuyButtonWrapper = styled.div`
  .ant-btn {
    padding: 0 10px;
    border-radius: 8px;

    font-size: 12px;

    span {
      font-weight: 500;
    }
  }
`;
