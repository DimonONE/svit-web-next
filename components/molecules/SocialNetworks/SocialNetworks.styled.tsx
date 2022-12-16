import styled from 'styled-components';

export const SocialNetworksList = styled.ul`
  display: flex;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

export const SocialNetworkListItem = styled.li<{width: number; height: number}>`
  display: block;
  align-items: center;

  ${({height, width}) => `
    width: ${width}px;
    height: ${height}px;
  `}

  &:active,
  &:focus {
    svg,
    img {
      ${({height, width}) => `
        width: ${width - 5}px;
        height: ${height - 5}px;
    `}
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: inherit;

    svg,
    img {
      height: 100%;
      width: 100%;
      margin: unset !important;

      transition: 0.15s;
    }
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
