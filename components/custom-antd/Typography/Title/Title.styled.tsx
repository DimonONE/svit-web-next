import {Typography} from 'antd';

import styled from 'styled-components';

export const StyledTitle = styled(Typography.Title)<{$color?: string; $fontWeight?: number}>`
  &.svit-title {
    color: ${({$color}) => $color};

    font-weight: ${({$fontWeight}) => $fontWeight};
  }
`;
