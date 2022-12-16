import {createGlobalStyle} from 'styled-components';

import Colors from './Colors';
import Fonts from './Fonts';
import {maxDevice} from './MediaQueries';

export const GlobalStyle = createGlobalStyle`
  html {
    height: unset;
    
  }

  *::selection {
    background: ${Colors.main};
  }
  
  body {
    overflow-x: hidden;
    overscroll-behavior-y: none;
    
    height: unset;
    margin: 0;

    font-family: ${Fonts.inter};
  }
  
  .ant-image-preview-mask {
    background: rgba(0, 0, 0, 0.90);
  }

  .ant-btn.ant-btn-primary:hover {
    border-color: ${Colors.darkGrey};
    background-color: ${Colors.darkGrey};
  }

  .section {
    width: 100%;
    padding: 0 240px;
    max-width: 1520px;
    margin: 0 auto;
  }

  .vertical-spacing {
    padding: 120px 0;
  }

  a:hover {
    color: ${Colors.main};
  }

  h1.svit-title,
  h2.svit-title,
  h3.svit-title {
    margin: 0;
  }

  h1.svit-title {
    font-size: 73px;
    line-height: 80px;
  }

  h2.svit-title {
    font-size: 40px;
    line-height: 40px;
  }

  .extra-bold {
    font-weight: 800;
  }

  .bold {
    font-weight: 700;
  }

  .semi-bold {
    font-weight: 600;
  }

  .medium {
    font-weight: 500;
  }

  .text-center {
    text-align: center;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .clickable {
    cursor: pointer;
  }

  .second-level-nav-enter {
    position: absolute;

    opacity: 0;

    transition: 200ms;
  }

  .second-level-nav-enter-active,
  .second-level-nav-enter-done {
    position: absolute;
    top: 100%;

    opacity: 1;

    transition: 200ms;
  }

  .second-level-nav-exit {
    position: absolute;
    top: 100%;

    opacity: 1;

    transition: 200ms;
  }

  .second-level-nav-exit-active,
  .second-level-nav-exit-done {
    position: absolute;

    opacity: 0;

    transition: 200ms;
  }

  .ant-image-preview-operations {
    li:last-child,
    li:nth-child(5) {
      display: none;
    }
  }

  .ant-image {
    width: 100%;
  }

  // Text 
  .ant-typography {
    word-break: normal;
  }

  @media ${maxDevice.laptopL} {
    .section {
      padding: 0 120px;
    }

    .vertical-spacing {
      padding: 80px 0;
    }
  }

  @media ${maxDevice.laptop} {
    .section {
      padding: 0 80px;
    }

    .vertical-spacing {
      padding: 60px 0;
    }
  }

  @media ${maxDevice.tablet} {
    .section {
      padding: 0 40px;
    }
  }

  @media ${maxDevice.mobileL} {
    .section {
      padding: 0 20px;
    }

    .vertical-spacing {
      padding: 40px 0;
    }
  }

  @media ${maxDevice.laptopL} {
    h1.svit-title {
      font-size: 40px;
      line-height: 45px;
    }

    h2.svit-title {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
