import Helmet from 'react-helmet';
import {useTranslation} from 'react-i18next';

import {Title} from '@custom-antd';

import {NotFoundWrapper} from './NotFound.styled';

const NotFound: React.FC = () => {
  const {t} = useTranslation();

  return (
    <NotFoundWrapper>
      <Helmet>
        <title>Not found</title>
      </Helmet>

      <Title>{t('NotFound.Title')}</Title>
    </NotFoundWrapper>
  );
};

export default NotFound;
