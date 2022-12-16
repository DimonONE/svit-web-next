import styled from 'styled-components';

import Colors from '@styles/Colors';

export const FeaturesSectionWrapper = styled.div`
  .light {
    .feature {
      background-color: ${Colors.grey3};
    }
  }

  .dark {
    .feature {
      background-color: ${Colors.dark1};
    }
  }
`;
