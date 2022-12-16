import React, { useEffect, useState } from 'react';
import {useTranslation} from 'react-i18next';
import { useRouter } from 'next/router';

import gsap from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import i18next from 'i18next';

// import {useAppDispatch} from '@redux/hooks';
import {MobileNavigation, Navigation, UnderConstruction} from '@organisms';

import {useScrollPosition} from '@hooks/useScrollPosition';

import { MainContext } from '@contexts';
import ContentLayout from '@root/layouts/ContentLayout';

type IProps = {
  children: React.ReactElement
};

const Container: React.FC<IProps> = ({children}) => {
  const defaultValue = localStorage.getItem('isVisible') !== 'false';

  const {i18n} = useTranslation();
  const location = useRouter();
  const scrollPosition = useScrollPosition();
  const [isVisible, setVisibleState] = useState<boolean>(defaultValue);
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);

  const isLaptop = windowDimension <= 1440;
  const isTablet = windowDimension <= 1024;
  const isMobile = windowDimension <= 768;

  gsap.registerPlugin(ScrollTrigger);
  const currentLanguage = localStorage.getItem('svit-system-language');

  // const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    ScrollTrigger.refresh();
  }, [location.pathname]);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);

    localStorage.setItem('svit-system-language', lang);
  };

  const onCloseBar = () => {
    setVisibleState(false);

    localStorage.setItem('isVisible', 'false');
  };

  const mainContextValue = {
    // dispatch,
    scrollPosition,
    changeLanguage,
    currentLanguage: i18n.language?.toUpperCase(),
    isTablet,
    isMobile,
    isLaptop,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      <header>{isTablet ? <MobileNavigation /> : <Navigation />}</header>
      <main>
        {children}
        <ContentLayout />
      </main>
      {process.env.NODE_ENV !== 'development' && isVisible ? (
          <div onClick={onCloseBar}>
            <UnderConstruction />
          </div>
        ) : null}
    </MainContext.Provider>
  );
};

export default Container;