import styled from 'styled-components';

import Colors from '@styles/Colors';

export const CardWrapper = styled.div`
  position: relative;
  padding-right: 140px;
  padding-left: 180px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  transform: translate(-20%, 60%);

  .text {
    width: 590px;
    margin-bottom: 15px;
    font-size: 28px;
    line-height: 30px;
    text-shadow: 2px 1px 2px black;
    color: ${Colors.white};
  }

  .subTitle {
    width: 360px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  margin-top: 130px;
  margin-bottom: 120px;
  padding: 0 40px 40px 0;
  background: #efefef;
  border-radius: 30px;

  .image-quotes {
    width: max-content;
    margin-left: 35%;
  }
`;

export const NameAndIcon = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  flex: 0 1 auto;
  margin-left: auto;

  .image-container {
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 14px;
    border-radius: 50%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .name {
    font-weight: 600;
  }
`;
