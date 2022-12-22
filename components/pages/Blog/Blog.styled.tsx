import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 140px;
`;

export const BlogInfo = styled.div`
  display: flex;
  height: auto;
  margin-top: 65px;
  margin-bottom: 120px;

  .leftBlock {
    width: 60%;
    margin-right: 40px;
  }

  .rightBlock {
    .card {
      &,
      .readMoreContainer {
        display: flex;
      }

      .readMoreContainer {
        padding: 5px 0;
        align-items: flex-end;
      }
    }

    .title {
      font-weight: 700;
    }

    .name {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }

    .data {
      margin-top: 24px;
      margin-bottom: 10px;
    }
    .name,
    .data {
      display: block;
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
  }
`;

export const CardContainer = styled.div`
  display: flex;

  .card {
    width: calc(33.3% - 20px * 2 / 3);

    &:nth-child(2) {
      margin: 0 20px;
    }
  }
`;
