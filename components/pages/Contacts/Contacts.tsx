import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Col, Row} from 'antd';

import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

import {Text, Title} from '@custom-antd';

import {SocialNetworks} from '@molecules';

import EnvelopeIcon from '@assets/icons/envelope.svg';
import LocationMapIcon from '@assets/icons/location-map.svg';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/phone.svg';

import Colors from '@styles/Colors';

import {ContactListItem, ContactsList, ContactsWrapper, IconWrapper, MapFrame} from './Contacts.styled';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 35,
};
const center = {
  lat: 50.462644,
  lng: 30.4369975,
};

const Contacts: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'Contacts'});

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC1sBlrgl4zrSixAZYbfFTtjyYmLyQk-8s',
  });

  const [_, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <ContactsWrapper className="vertical-spacing">
      <div className="section">
        <Row gutter={[0, 10]}>
          <Col
            lg={{
              span: 10,
              push: 2,
            }}
            sm={{span: 24}}
            xs={{span: 24}}
          >
            <Title color={Colors.black} fontWeight={800}>
              {t('ContactWithUs')}
            </Title>
          </Col>
          <Col
            lg={{
              span: 10,
              push: 2,
            }}
            sm={{span: 24}}
            xs={{span: 24}}
          >
            <ContactsList>
              <ContactListItem key="email">
                <IconWrapper>
                  <EnvelopeIcon />
                </IconWrapper>
                <Text className="semi-bold big" color={Colors.black}>
                  <a href="mailto:sales@svit.io">sales@svit.io</a>
                </Text>
              </ContactListItem>
              <ContactListItem key="phones">
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Text className="semi-bold big" color={Colors.black}>
                    <a href="tel:+380976420978">+380976420978</a>
                  </Text>
                </div>
              </ContactListItem>
              <ContactListItem key="address">
                <IconWrapper>
                  <LocationIcon />
                </IconWrapper>
                <Text className="semi-bold big" color={Colors.black}>
                  {t('Address')}
                </Text>
              </ContactListItem>
            </ContactsList>
          </Col>
        </Row>
        <Row style={{marginTop: 10}}>
          <Col lg={{span: 22, push: 2}} sm={{span: 24}} xs={{span: 24}}>
            <SocialNetworks size={52} />
          </Col>
        </Row>
        <MapFrame>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <Marker position={center} icon={LocationMapIcon} />
            </GoogleMap>
          ) : null}
        </MapFrame>
      </div>
    </ContactsWrapper>
  );
};

export default Contacts;
