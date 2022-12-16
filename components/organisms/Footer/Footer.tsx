import {useTranslation} from 'react-i18next';
import Link from 'next/link';

import {Col, Row} from 'antd';

import {getYear} from 'date-fns';

import {Text} from '@custom-antd';

import SvitLogo from '@assets/svit-logo.svg';

import Colors from '@styles/Colors';

import {navItems} from '@organisms/Navigation/utils';

import {ChildItemWrapper, ChildItemsList, FooterWrapper} from './Footer.styled';

const Footer: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'Navigation'});

  const renderedFooterListItems = navItems.map(navItem => {
    const {children, i18nKey, key} = navItem;

    const renderedChildrenListItems = children
      ?.map(child => {
        const {i18nKey: i18nKeyChild, key: keyChild, route, isNavBtn} = child;

        if (isNavBtn) {
          return null;
        }

        const stringKey = `footer-nav-child-${keyChild}`;

        return (
          <ChildItemWrapper key={stringKey}>
            <Text className="middle small" color={Colors.grey1}>
              <Link href={route as string}>{t(i18nKeyChild)}</Link>
            </Text>
          </ChildItemWrapper>
        );
      })
      .filter(item => {
        return item;
      });

    const stringKey = `footer-nav-${key}`;

    return (
      <Col xl={4} lg={8} xs={12} sm={8} key={stringKey}>
        <Text className="middle small" color={Colors.darkGrey}>
          {t(i18nKey)}
        </Text>
        <ChildItemsList>{renderedChildrenListItems}</ChildItemsList>
      </Col>
    );
  });

  return (
    <FooterWrapper>
      <div className="section">
        <Row gutter={[20, 20]}>
          {renderedFooterListItems}
          <Col xl={4} lg={8} xs={12} sm={8}>
            <Text className="middle small" color={Colors.darkGrey}>
              {t('ContactUs')}
            </Text>
            <ChildItemsList>
              <ChildItemWrapper>
                <Text className="middle small" color={Colors.grey1}>
                  <a href="mailto:svit_info@gmail.com">svit_info@gmail.com</a>
                </Text>
              </ChildItemWrapper>
              <ChildItemWrapper>
                <Text className="middle small" color={Colors.grey1}>
                  <a href="tel:+380(96)0302040">+380 (96) 030 20 40</a>
                </Text>
              </ChildItemWrapper>
              <ChildItemWrapper>
                <Text className="middle small" color={Colors.grey1}>
                  <a href="tel:+40(96)0302040"> +40 (96) 030 20 40</a>
                </Text>
              </ChildItemWrapper>
            </ChildItemsList>
          </Col>
          <Col xl={4} lg={8} xs={12} sm={8}>
            <Text className="middle small" color={Colors.darkGrey}>
              {t('SubscribeToNewsletter')}
            </Text>
          </Col>
          <Col xl={4} lg={8} xs={12} sm={8} style={{display: 'flex', flexDirection: 'column'}}>
            <SvitLogo className="svit-logo-footer" />
            <Text className="middle small" color={Colors.darkGrey}>
              {t('AllRightsReserved')} ©{getYear(new Date())}&nbsp;SVIT
            </Text>
            <ChildItemsList>
              <ChildItemWrapper>
                <Text className="middle small" color={Colors.grey1}>
                  <a href="#">{t('PrivacyPolicy')}</a>
                </Text>
              </ChildItemWrapper>
            </ChildItemsList>
          </Col>
        </Row>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
