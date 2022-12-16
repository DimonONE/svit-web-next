import React from 'react';
import {ReadMore as ReadMoreBlock} from './ReadMore.styled';

type IProps = {
  text?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children?: any;
};

const ReadMore: React.FC<IProps> = ({children, type, onClick, text='Read more' }) => {
  return (
    <ReadMoreBlock type={type} onClick={onClick}>{text || children}</ReadMoreBlock>
  );
};

export default ReadMore;
