import {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import gsap from 'gsap/dist/gsap';
import {Cross} from 'hamburger-react';

import {Button, Text} from '@custom-antd';

import {SocialNetworks} from '@molecules';

import {languages} from '@utils/constants';

import Cart from '@assets/icons/cart.svg';
import ChevronRight from '@assets/icons/chevron-right.svg';
import Search from '@assets/icons/search.svg';
import SvitLogo from '@assets/svit-logo.svg';

import Colors from '@styles/Colors';

import {MainContext} from '@contexts';
import {NavItem, blackNavStyleRoutes, navItems} from './utils';
import {
  ActionsList,
  ActionsListItem,
  BuyButtonWrapper,
  HamburgerWrapper,
  IconWrapper,
  LanguagesWrapper,
  LogoWrapper,
  NavList,
  NavListItem,
  NavigationContainer,
  NavigationMobListWrapper,
  TopBar,
} from './Navigation.styled';

const MobileNavigation: React.FC = () => {
  const location = useRouter();

  const {scrollPosition, currentLanguage, changeLanguage} = useContext(MainContext);

  const {t} = useTranslation('translation', {keyPrefix: 'Navigation'});

  const navListRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setMenuOpenState] = useState(false);
  const [childRoutes, setChildRoutes] = useState<NavItem[]>([]);

  const isBlackNav = blackNavStyleRoutes.includes(location.pathname) || isMenuOpen;
  const isGallery = location.pathname.includes('gallery');

  const navClassName = scrollPosition !== 0 || isBlackNav || isGallery ? 'scrolled-nav' : 'nav';

  const onItemWithChildClick = (value = -50) => {
    gsap.to(navListRef.current, {
      xPercent: value,
      duration: 0.3,
    });
  };

  const onBackClick = () => {
    gsap.to(navListRef.current, {
      xPercent: 0,
      duration: 0.3,
      onComplete: () => {
        setChildRoutes([]);
      },
    });
  };

  const resetState = useCallback(() => {
    setChildRoutes([]);
    setMenuOpenState(false);
    onBackClick();
  }, []);

  const renderItems = (routes: NavItem[]) => {
    if (routes && routes.length) {
      return routes
        .map(navItem => {
          const {toSpread, children} = navItem;
          if (toSpread && children) {
            return children;
          }

          return navItem;
        })
        .flat()
        .filter(navItem => {
          const {isNavBtn} = navItem;
          return !isNavBtn;
        })
        .map(navItem => {
          const {i18nKey, children, route, key, Icon, isCheckByRoute} = navItem;

          const isRouteActive =
            location.pathname.includes(key) || (isCheckByRoute && location.pathname.includes(route as string));

          const listItemColor = isRouteActive ? Colors.grey1 : Colors.white;

          if (children && children.length) {
            return (
              <NavListItem
                className="nav-list-item animated with-child"
                onClick={() => {
                  setChildRoutes(children);
                }}
                key={key}
              >
                <Text className="regular biggest" color={listItemColor}>
                  {t(i18nKey)}
                </Text>
                <IconWrapper>
                  <ChevronRight />
                </IconWrapper>
              </NavListItem>
            );
          }

          return (
            <NavListItem className="nav-list-item animated" onClick={resetState} key={key}>
              <Link href={route || ''}>
                {Icon ? <Icon /> : null}
                <Text className="regular biggest" color={listItemColor}>
                  {t(i18nKey)}
                </Text>
              </Link>
            </NavListItem>
          );
        });
    }
  };

  const renderLanguages = () => {
    return languages.map(language => {
      const {key, i18nKey, label} = language;

      const isLanguageActive = label === currentLanguage;

      const textColor = isLanguageActive ? Colors.white : Colors.grey1;

      return (
        <NavListItem
          className="nav-list-item other"
          onClick={() => {
            changeLanguage(i18nKey);
          }}
          key={key}
        >
          <Text className="regular biggest" color={textColor}>
            {label}
          </Text>
        </NavListItem>
      );
    });
  };

  const renderedMainItems = renderItems(navItems);
  const renderedChildItems = renderItems(childRoutes);
  const renderedLanguages = useMemo(() => {
    return renderLanguages();
  }, [currentLanguage]);

  const animateNavigation = (config: {delay?: string; duration?: number} = {}) => {
    const {delay, duration} = config;

    const listItems = gsap.utils.toArray<HTMLUListElement>('.animated');

    const tl = gsap.timeline({
      delay: 0.3,
    });

    listItems.forEach((listItem, index) => {
      tl.fromTo(
        listItem,
        {
          opacity: 0,
        },
        {opacity: 1, duration, ease: 'none'},
        delay
      );
    });
  };

  useEffect(() => {
    if (navListRef && navListRef.current) {
      if (isMenuOpen) {
        animateNavigation({
          delay: '>-0.15',
          duration: 0.2,
        });
      } else {
        onItemWithChildClick(0);
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (childRoutes && childRoutes.length) {
      onItemWithChildClick();
    }
  }, [childRoutes]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isMenuOpen]);

  return (
    <NavigationContainer className={navClassName} $isMobile $isOpen={isMenuOpen}>
      <TopBar>
        <HamburgerWrapper>
          <Cross direction="right" color={Colors.white} size={32} toggled={isMenuOpen} toggle={setMenuOpenState} />
        </HamburgerWrapper>
        <LogoWrapper onClick={resetState}>
          <Link href="/">
            <SvitLogo />
          </Link>
        </LogoWrapper>
        <ActionsList>
          {!isMenuOpen ? (
            <>
              <ActionsListItem>
                <Text color={Colors.white}>
                  <Cart />
                </Text>
              </ActionsListItem>
              <ActionsListItem>
                <Text color={Colors.white}>
                  <Search />
                </Text>
              </ActionsListItem>
            </>
          ) : null}
        </ActionsList>
      </TopBar>
      <NavigationMobListWrapper $isMenuOpen={isMenuOpen} ref={navListRef}>
        <NavList $isMenuOpen={isMenuOpen} $isRoot>
          {isMenuOpen ? (
            <>
              {renderedMainItems}
              <NavListItem className="nav-list-item animated" key="login" onClick={resetState}>
                <Link href="/">
                  <Text className="regular biggest" color={Colors.white}>
                    {t('Login')}
                  </Text>
                </Link>
              </NavListItem>
              <NavListItem className="nav-list-item animated lang" key="languages">
                <LanguagesWrapper>{renderedLanguages}</LanguagesWrapper>
              </NavListItem>
              <NavListItem className="nav-list-item animated" key="social-networks">
                <SocialNetworks size={36} />
              </NavListItem>
            </>
          ) : null}
        </NavList>
        <NavList $isMenuOpen={isMenuOpen}>
          {isMenuOpen && childRoutes && childRoutes.length ? (
            <>
              <NavListItem className="nav-list-item back-btn" onClick={onBackClick}>
                <IconWrapper>
                  <ChevronRight />
                </IconWrapper>
                <Text className="regular middle" color={Colors.grey1}>
                  {t('Back')}
                </Text>
              </NavListItem>
              {renderedChildItems}
            </>
          ) : null}
        </NavList>
      </NavigationMobListWrapper>
      {isMenuOpen ? (
        <BuyButtonWrapper>
          <Button type="primary" i18nKey="Buy" />
        </BuyButtonWrapper>
      ) : null}
    </NavigationContainer>
  );
};

export default MobileNavigation;
