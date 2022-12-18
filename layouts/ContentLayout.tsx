import React from 'react';

import {useRouter} from 'next/router';

import {Footer} from '@organisms';

import {
  hiddenFooter,
  navItems,
} from '@root/components/organisms/Navigation/utils';

const ContentLayout: React.FC = () => {
  const location = useRouter();
  const showFooter =
    hiddenFooter.filter(path => path === location.pathname)?.length === 0;

  return showFooter ? <Footer /> : null;
};

export default ContentLayout;
