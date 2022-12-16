import styled from 'styled-components';

import Colors from '@styles/Colors';

export const PlayTemperatureSectionWrapper = styled.section`
  .slider-wrapper {
    position: relative;

    width: 100%;
    border-radius: 40px;

    background: ${Colors.white};

    .slider {
      position: relative;
      z-index: 10;

      width: 100%;
      height: 30px;
      border-radius: 40px;

      background: linear-gradient(90deg, #9ee2ff 0%, #ffffff 50%, #ff8e8e 100%);

      .slider-bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        border-radius: 40px;
        height: inherit;
        width: inherit;

        background: linear-gradient(90deg, #9ee2ff 0%, #ffffff 50%, #ff8e8e 100%);

        opacity: 0.6;
        filter: blur(15px);
      }

      .circle {
        position: absolute;
        top: -15px;
        z-index: 11;

        width: 55px;
        height: 55px;
        border-radius: 50%;

        background: ${Colors.white};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        cursor: pointer;
      }
    }
  }
`;

export const PlayTemperaturePanelWrapper = styled.div`
  position: relative;

  img.play-temperature-panel {
    width: 100%;
    height: auto;
    max-height: 450px;

    object-fit: contain;
  }
`;
