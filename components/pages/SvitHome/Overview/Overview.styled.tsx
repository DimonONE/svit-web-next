import styled from 'styled-components';

export const OverviewWrapper = styled.div``;

export const Overlay = styled.div`
  position: absolute;
  z-index: 2;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.45);
`;

export const Video = styled.video`
  position: absolute;
  z-index: 1;

  height: 100%;
  width: 100%;

  object-fit: cover;
`;
