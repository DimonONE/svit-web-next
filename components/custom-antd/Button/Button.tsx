import {useTranslation} from 'react-i18next';

import {Button as AntdButton, ButtonProps as AntdButtonProps} from 'antd';

interface ButtonProps {
  i18nKey: string;
}

const Button: React.FC<AntdButtonProps & ButtonProps> = props => {
  const {i18nKey, ...rest} = props;

  const {t} = useTranslation('translation', {keyPrefix: 'Buttons'});

  return <AntdButton {...rest}>{t(i18nKey)}</AntdButton>;
};

export default Button;
