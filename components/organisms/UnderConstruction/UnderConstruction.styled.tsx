import styled from 'styled-components';

import Colors from '@styles/Colors';

export const UnderConstructionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  background-color: ${Colors.main};

  cursor: pointer;
`;
