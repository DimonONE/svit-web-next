import {Typography} from 'antd';

import styled from 'styled-components';

import {maxDevice} from '@styles/MediaQueries';

export const StyledText = styled(Typography.Text)<{$color?: string}>`
  &.custom-text {
    color: ${({$color}) => $color};

    &.biggest {
      font-size: 28px;
      line-height: 34px;
    }

    &.big {
      font-size: 20px;
      line-height: 24px;
    }

    &.middle {
      font-size: 14px;
      line-height: 20px;
    }

    &.small {
      font-size: 12px;
      line-height: 16px;
    }

    @media ${maxDevice.tablet} {
      &.big {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;
