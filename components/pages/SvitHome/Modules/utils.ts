import Controller from '@assets/svit-home/modules/controller-module.png';
import { StaticImageData } from 'next/image';

export interface ModulesGridItemProps {
  gridItemProps: {
    title: string;
    description: string;
    itemNumber: string;
    price: string;
    image: StaticImageData;
    count: number;
  };
}

export const modules = [
  {
    key: 'some-key-1',
    i18nKey: 'SvitController',
    itemNumber: '100335',
    price: '1099,00',
    image: Controller,
    itemsCount: 2,
  },
  {
    key: 'some-key-2',
    i18nKey: 'SvitController',
    itemNumber: '100335',
    price: '1099,00',
    image: Controller,
    itemsCount: 1,
  },
  {
    key: 'some-key-3',
    i18nKey: 'SvitController',
    itemNumber: '100335',
    price: '1099,00',
    image: Controller,
    itemsCount: 0,
  },
  {
    key: 'some-key-4',
    i18nKey: 'SvitController',
    itemNumber: '100335',
    price: '1099,00',
    image: Controller,
    itemsCount: 5,
  },
];
