import {useMemo} from 'react';
import Image from 'next/image';

import {socials} from '@utils/constants';

import {SocialNetworkListItem, SocialNetworksList} from './SocialNetworks.styled';

interface SocialNetworksProps {
  size: number;
}

const SocialNetworks: React.FC<SocialNetworksProps> = props => {
  const {size} = props;

  const iconStyles = {
    width: size,
    height: size,
  };

  const renderedSocialNetworks = useMemo(() => {
    return socials.map(social => {
      const {key, icon: Icon, link, isImage} = social;

      return (
        <SocialNetworkListItem key={key} {...iconStyles}>
          <a href={link} target="_blank">
            {isImage ? <Image src={Icon} alt={key} /> : <Icon />}
          </a>
        </SocialNetworkListItem>
      );
    });
  }, []);

  return <SocialNetworksList>{renderedSocialNetworks}</SocialNetworksList>;
};

export default SocialNetworks;
