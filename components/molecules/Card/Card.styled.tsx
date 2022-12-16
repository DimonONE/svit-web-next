import styled from "styled-components";

export const Card = styled.div`
  .name, .data {
    display: block;
    margin: 20px 0;
    text-transform: uppercase;
  };

  .name {
    font-weight: 700;
  };

  .data, .info {
    font-weight: 600;
    font-size: 16px;
  }

  .data {
    color: #E2E2E2;
  };

  .info {
    color: #A5A39F;
  };
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
`;