import {useContext, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {CSSTransition} from 'react-transition-group';

import {Dropdown, Menu, Space} from 'antd';
import { useRouter } from 'next/router';

import {DownOutlined} from '@ant-design/icons';

import {Text} from '@custom-antd';

import {languages} from '@utils/constants';

import  Cart from '@assets/icons/cart.svg';
import  Search from '@assets/icons/search.svg';

import Colors from '@styles/Colors';

import {MainContext} from '@contexts';

import {ActionsList, ActionsListItem, NavigationContainer} from './Navigation.styled';
import NavigationList from './NavigationList';
import {NavItem, blackNavStyleRoutes, navItems} from './utils';

const Navigation: React.FC = () => {
  const location = useRouter();

  const {scrollPosition, changeLanguage, currentLanguage} = useContext(MainContext);

  const {t} = useTranslation('translation', {keyPrefix: 'Navigation'});

  const [secondLevelNav, setSecondLevelNav] = useState<NavItem[]>([]);

  const isBlackNav = blackNavStyleRoutes.includes(location.pathname);
  const isGallery = location.pathname.includes('gallery');

  const navClassName =
    scrollPosition !== 0 || secondLevelNav.length || isBlackNav || isGallery ? 'scrolled-nav' : 'nav';

  const onMouseEnter = (children: NavItem[]) => {
    setSecondLevelNav(children);
  };

  const onMouseLeave = () => {
    setSecondLevelNav([]);
  };

  const renderedLanguages = useMemo(() => {
    return languages.map(language => {
      const {key, i18nKey, label} = language;

      return (
        <Menu.Item onClick={() => changeLanguage(i18nKey)} key={key}>
          <span>{label}</span>
        </Menu.Item>
      );
    });
  }, [currentLanguage]);

  return (
    <NavigationContainer className={navClassName} onMouseLeave={onMouseLeave}>
      <NavigationList navList={navItems} onMouseEnter={onMouseEnter} isRoot />
      <ActionsList>
        <ActionsListItem>
          <Search />
        </ActionsListItem>
        <ActionsListItem>
          <Cart />
        </ActionsListItem>
        <ActionsListItem>
          <Dropdown overlay={<Menu>{renderedLanguages}</Menu>}>
            <Space style={{cursor: 'pointer'}}>
              <Text className="regular middle" color={Colors.white}>
                {currentLanguage}
              </Text>
              <DownOutlined style={{color: Colors.white}} />
            </Space>
          </Dropdown>
        </ActionsListItem>
        <ActionsListItem>
          <Text className="regular middle" color={Colors.white}>
            {t('Login')}
          </Text>
        </ActionsListItem>
      </ActionsList>
      <CSSTransition in={Boolean(secondLevelNav.length)} timeout={200} classNames="second-level-nav" unmountOnExit>
        <NavigationList bgColor={Colors.white} height={45} gap={70} navList={secondLevelNav} color={Colors.black} />
      </CSSTransition>
    </NavigationContainer>
  );
};

export default Navigation;
