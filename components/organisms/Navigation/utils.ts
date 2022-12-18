/* eslint-disable unused-imports/no-unused-imports-ts */
import {FunctionComponent, SVGProps} from 'react';

import CloudIcon from '@assets/icons/cloud.svg';
import ConfiguratorIcon from '@assets/icons/configurator.svg';
import OverviewIcon from '@assets/icons/eye.svg';
import HeatIcon from '@assets/icons/heat.svg';
import InstructionIcon from '@assets/icons/instruction.svg';
import KeypadIcon from '@assets/icons/panel.svg';
import RoomIcon from '@assets/icons/room.svg';
import SocketIcon from '@assets/icons/socket.svg';
import SoftIcon from '@assets/icons/soft.svg';
import TemperatureIcon from '@assets/icons/temperature.svg';
import TermoIcon from '@assets/icons/termo.svg';

export type NavItem = {
  key: string;
  i18nKey: string;
  children?: NavItem[];
  isNavBtn?: boolean;
  route?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement> & {title?: string | undefined}>;
  isCheckByRoute?: boolean;
  toSpread?: boolean;
};

export const blackNavStyleRoutes = ['/', '/contacts', '/about-us', '/svit-home/modules', '/authors'];

export const hiddenFooter = ['/', '/not-found'];

export const navItems: NavItem[] = [
  {
    key: 'svit-touch',
    i18nKey: 'SvitTouch',
    children: [
      {key: 'keypads', i18nKey: 'KeyPads', route: '/svit-touch/keypads', Icon: KeypadIcon},
      {key: 'sockets', i18nKey: 'Sockets', route: '/svit-touch/sockets', Icon: SocketIcon},
      {key: 'thermostat', i18nKey: 'Thermostat', route: '/svit-touch/thermostat', Icon: TermoIcon},
      {
        key: 'svit-touch-accessories',
        i18nKey: 'Accessories',
        route: '/svit-touch/accessories',
        Icon: ConfiguratorIcon,
        isCheckByRoute: true,
      },
      {key: 'order-cta', i18nKey: 'Buy', isNavBtn: true, route: '/some-route-1'},
    ],
  },
  {
    key: 'svit-home',
    i18nKey: 'SvitHome',
    children: [
      {key: 'overview', i18nKey: 'Overview', route: '/svit-home/overview', Icon: OverviewIcon},
      {key: 'soft', i18nKey: 'Soft', route: '/svit-home/soft', Icon: SoftIcon},
      {key: 'modules', i18nKey: 'Modules', route: '/svit-home/modules', Icon: KeypadIcon},
      {
        key: 'optional-equipment',
        i18nKey: 'OptionalEquipment',
        route: '/svit-home/optional-equipment',
        Icon: ConfiguratorIcon,
      },
      {
        key: 'svit-home-accessories',
        i18nKey: 'Accessories',
        route: '/svit-home/accessories',
        Icon: ConfiguratorIcon,
        isCheckByRoute: true,
      },
      {key: 'order-cta', i18nKey: 'Buy', isNavBtn: true, route: '/some-route-2'},
    ],
  },
  {
    key: 'home',
    i18nKey: 'Home',
    toSpread: true,
    children: [
      {
        key: 'gallery',
        i18nKey: 'Gallery',
        route: '/gallery',
        children: [],
      },
      {
        key: 'contacts',
        i18nKey: 'Contacts',
        route: '/contacts',
        children: [],
      },
      {
        key: 'about-us',
        i18nKey: 'AboutUs',
        route: '/about-us',
        children: [],
      },
      {
        key: 'documentation',
        i18nKey: 'Documentation',
        route: '/documentation',
        children: [],
      },
      {
        key: 'authors',
        i18nKey: 'Authors',
        route: '/authors',
        children: [],
      },
    ],
  },
];
