import styled from 'styled-components';

import Colors from '@styles/Colors';
import { StaticImageData } from 'next/image';

export const FeatureWrapper = styled.div<{$bg?: string | StaticImageData; $parentType?: 'light' | 'dark'}>`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  padding: 20px;
  border-radius: 25px;
  margin-bottom: 20px;

  ${({$bg}) =>
    $bg
      ? `
  background-image: url('${$bg}');
  background-repeat: no-repeat;
  background-size: cover;
  `
      : ''}

  ${({$parentType}) =>
    $parentType === 'light'
      ? `
  background-color: ${Colors.grey3}`
      : `background-color: ${Colors.dark1}`};
`;

export const TextWrapper = styled.div<{$hasGradient?: boolean}>`
  z-index: 20;

  display: flex;
  flex-direction: column;

  ${({$hasGradient}) =>
    $hasGradient
      ? `
      height: 225px;
      padding: 20px;
      margin: -20px -20px 0 -20px;

      background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
  `
      : ''}

  text-align: center;
`;
