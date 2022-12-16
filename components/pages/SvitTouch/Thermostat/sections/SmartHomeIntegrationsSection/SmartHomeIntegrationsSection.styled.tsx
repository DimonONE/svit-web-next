import styled from 'styled-components';

export const SmartHomeIntegrationsSectionWrapper = styled.section``;

export const IntegrationsList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;

  list-style-type: none;
`;

export const IntegrationsListItem = styled.li`
  padding: 35px;
  border-radius: 35px;

  background: #efefef;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
