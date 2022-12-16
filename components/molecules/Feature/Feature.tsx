import {Text} from '@custom-antd';

import Colors from '@styles/Colors';
import { StaticImageData } from 'next/image';

import {FeatureWrapper, TextWrapper} from './Feature.styled';

type FeatureProps = {
  title?: string;
  description?: string;
  align?: 'top' | 'bottom';
  children?: React.ReactElement;
  bg?: string | StaticImageData;
  parentType?: 'light' | 'dark';
  minHeight?: number;
  descriptionColor?: Colors;
  hasGradient?: boolean;
  id?: string;
};

const Feature: React.FC<FeatureProps> = props => {
  const {
    title,
    description,
    align = 'top',
    children,
    bg,
    parentType = 'light',
    minHeight = 0,
    descriptionColor = Colors.grey1,
    hasGradient = false,
    id,
  } = props;

  const titleColor = parentType === 'dark' ? Colors.white : Colors.black;

  if (align === 'bottom') {
    return (
      <FeatureWrapper $bg={bg} $parentType={parentType} style={{minHeight}} id={id}>
        {children}
        <TextWrapper $hasGradient={hasGradient}>
          <Text className="big semi-bold" color={titleColor}>
            {title}
          </Text>
          <Text className="middle regular" color={descriptionColor}>
            {description}
          </Text>
        </TextWrapper>
      </FeatureWrapper>
    );
  }

  return (
    <FeatureWrapper $bg={bg} $parentType={parentType} className={`feature ${align}`} style={{minHeight}} id={id}>
      <TextWrapper $hasGradient={hasGradient}>
        <Text className="big semi-bold" color={titleColor}>
          {title}
        </Text>
        <Text className="middle regular" color={descriptionColor}>
          {description}
        </Text>
      </TextWrapper>
      {children}
    </FeatureWrapper>
  );
};

export default Feature;
