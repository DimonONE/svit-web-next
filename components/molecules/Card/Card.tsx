import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {Text} from '@custom-antd';
import ReadMore from '@atoms/ReadMore';
import { Card as CardBlock, ImageContainer } from './Card.styled';

type IProps = {
  image: StaticImageData
  name: string
  date: string
  info: string
  onMore: () => void
  className?: string
}

const Card: React.FC<IProps> = (props) => {
  const {name, image, date, info, onMore, className} = props;

  return (
    <CardBlock className={className} >
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <Text className="name big semi-bold">{name}</Text>
      <Text className="data">{date}</Text>
      <Text className="info">
        {info}
        <ReadMore type="button" onClick={onMore}/>
      </Text>
    </CardBlock>
  );
};

export default Card;
