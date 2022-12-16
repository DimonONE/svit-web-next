import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.png';
import TelegramIcon from '@assets/icons/telegram.svg';

export const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  768: 1,
};

export enum Suffixes {
  mm = 'MM',
}

export const socials = [
  {key: 'facebook', icon: FacebookIcon, link: 'https://www.facebook.com/svitsmartua'},
  {key: 'instagram', icon: InstagramIcon, link: 'https://www.instagram.com/svit_smart_ua', isImage: true},
  {key: 'telegram', icon: TelegramIcon, link: 'https://t.me/vshatilov'},
];

export const languages = [
  {key: 'ukr', i18nKey: 'ukr', label: 'UKR'},
  {key: 'en', i18nKey: 'en', label: 'EN'},
];
