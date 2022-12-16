import React from 'react';
import {useTranslation} from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {Button} from '@custom-antd';

import SvitLogo from '@assets/svit-logo.svg';

import Colors from '@styles/Colors';

import {LaptopBuyButtonWrapper, NavigationListItemWrapper, NavigationListWrapper} from './Navigation.styled';
import {NavItem} from './utils';

type NavigationListProps = {
  navList: NavItem[];
  color?: string;
  onMouseEnter?: (children: NavItem[]) => void;
  bgColor?: string;
  height?: number;
  gap?: number;
  isRoot?: boolean;
};

type NavigationListItemProps = {
  children: any;
  color?: string;
  onMouseEnter: () => void;
  isRoot?: boolean;
};

export const NavigationListItem: React.FC<NavigationListItemProps> = props => {
  const {children, color, onMouseEnter, isRoot} = props;

  return (
    <NavigationListItemWrapper color={color} onMouseEnter={onMouseEnter} $isRoot={isRoot}>
      {children}
    </NavigationListItemWrapper>
  );
};

const NavigationList: React.FC<NavigationListProps> = props => {
  const location = useRouter();

  const {navList, color = Colors.white, onMouseEnter, bgColor, gap = 50, height = 60, isRoot = false} = props;

  const {t} = useTranslation('translation', {keyPrefix: 'Navigation'});

  const renderedNavList = navList
    .map(navListItem => {
      const {toSpread, children} = navListItem;

      if (toSpread && children) {
        return children;
      }

      return navListItem;
    })
    .flat()
    .map(navListItem => {
      const {key, i18nKey, children, route, Icon, isNavBtn} = navListItem;

      const isRouteActive = location.pathname.includes(key);

      const listItemColor = isRouteActive ? Colors.grey1 : color;

      if (isNavBtn) {
        return (
          <LaptopBuyButtonWrapper key={key}>
            <Button className="regular middle" type="primary" i18nKey="Buy" size="small" />
          </LaptopBuyButtonWrapper>
        );
      }

      return (
        <NavigationListItem
          key={key}
          color={listItemColor}
          onMouseEnter={() => {
            if (onMouseEnter && children) {
              onMouseEnter(children);
            }
          }}
          isRoot={isRoot}
        >
          {route ? (
            <Link href={route}>
              {!isRoot && Icon ? (
                <>
                  <Icon className="route-icon" />
                  {t(i18nKey)}
                </>
              ) : (
                t(i18nKey)
              )}
            </Link>
          ) : (
            t(i18nKey)
          )}
        </NavigationListItem>
      );
    });

  return (
    <NavigationListWrapper gap={gap} height={height} bgColor={bgColor}>
      {isRoot ? (
        <NavigationListItem onMouseEnter={() => {}}>
          <Link href="/">
            <SvitLogo />
          </Link>
        </NavigationListItem>
      ) : null}
      {renderedNavList}
    </NavigationListWrapper>
  );
};

export default NavigationList;
