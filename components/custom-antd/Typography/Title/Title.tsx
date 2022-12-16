import {TitleProps as AntdTitleProps} from 'antd/lib/typography/Title';
import {TypographyProps as AntTypographyProps} from 'antd/lib/typography/Typography';

import Colors from '@styles/Colors';

import {StyledTitle} from './Title.styled';

type TitleProps = {
  color?: string;
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  className?: string;
};

const Title: React.FC<AntTypographyProps<any> & AntdTitleProps & TitleProps> = props => {
  const {children, color = Colors.white, fontWeight = 400, className = '', ...rest} = props;

  const classNames = `svit-title ${className}`;

  return (
    <StyledTitle className={classNames} $color={color} $fontWeight={fontWeight} {...rest}>
      {children}
    </StyledTitle>
  );
};

export default Title;
