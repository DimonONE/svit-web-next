import styled from 'styled-components';

export const Card = styled.div`
  .name,
  .data {
    display: block;
    margin: 20px 0;
    text-transform: uppercase;
  }

  .name {
    font-weight: 700;
  }

  .data,
  .info {
    font-weight: 600;
    font-size: 16px;
  }

  .data {
    color: #e2e2e2;
  }

  .info {
    color: #a5a39f;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 230px;
  border-radius: 24px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;
