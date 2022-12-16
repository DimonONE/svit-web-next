
import React, {useMemo} from 'react';
import {Footer} from '@organisms';
import { useRouter } from 'next/router';
import { hiddenFooter, navItems } from '@root/components/organisms/Navigation/utils';

const ContentLayout: React.FC = () => {
  const location = useRouter()
  const showFooter = hiddenFooter.find(path => path !== location.pathname)?.length

  return showFooter ? <Footer /> : null
};

export default ContentLayout;
