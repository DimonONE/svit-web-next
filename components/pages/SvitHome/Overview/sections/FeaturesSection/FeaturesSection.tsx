import {useTranslation} from 'react-i18next';
import Masonry from 'react-masonry-css';

import styled from 'styled-components';

import {Text} from '@custom-antd';

import {DoubleColRow} from '@molecules';

import {breakpointColumnsObj} from '@utils/constants';

import Colors from '@styles/Colors';
import {maxDevice} from '@styles/MediaQueries';

import {FeaturesSectionWrapper} from './FeaturesSection.styled';
import ClimateControl from './features/ClimateControl';
import CurtainsControl from './features/CurtainsControl';
import FloorHeating from './features/FloorHeating';
import GatesAndGarage from './features/GatesAndGarage';
import LeaksProtect from './features/LeaksProtect';
import LightningControl from './features/LightningControl';
import Multimedia from './features/Multimedia';
import RGBAndAdaptiveLight from './features/RGBAndAdaptiveLight';
import Scenas from './features/Scenas';
import SecuritySystemsIntegration from './features/SecuritySystemsIntegration';
import UsersSettings from './features/UsersSettings';
import Ventilation from './features/Ventilation';
import VideoMotion from './features/VideoMotion';

const features = [
  {
    element: CurtainsControl,
    parentType: 'light',
    marginTop: 40,
  },
  {
    element: FloorHeating,
    parentType: 'dark',
    marginTop: 0,
  },
  {
    element: SecuritySystemsIntegration,
    parentType: 'light',
    marginTop: 80,
  },

  {
    element: ClimateControl,
    parentType: 'light',
    marginTop: -65,
  },
  {
    element: GatesAndGarage,
    parentType: 'light',
    marginTop: -70,
  },
  {
    element: LightningControl,
    parentType: 'dark',
    marginTop: 10,
  },

  {
    element: Scenas,
    parentType: 'dark',
    marginTop: -100,
  },
  {
    element: UsersSettings,
    parentType: 'light',
    marginTop: -100,
  },
  {
    element: RGBAndAdaptiveLight,
    parentType: 'dark',
    marginTop: 5,
  },

  {
    element: VideoMotion,
    parentType: 'light',
    marginTop: 5,
  },
  {
    element: LeaksProtect,
    parentType: 'dark',
    marginTop: -200,
  },
  {
    element: Multimedia,
    parentType: 'light',
    marginTop: -145,
  },

  {
    element: null,
    parentType: 'light',
    marginTop: -235,
  },
  {
    element: Ventilation,
    parentType: 'light',
    marginTop: -55,
  },
  {
    element: null,
    parentType: 'light',
    marginTop: -115,
  },
];

const MasonryGrid = styled(Masonry)`
  display: flex;
  gap: 20px;

  .features-masonry-col:first-child {
    margin-top: 30px;
  }

  .features-masonry-col:last-child {
    margin-top: 60px;
  }

  @media ${maxDevice.laptop} {
    .features-masonry-col:first-child {
      margin-top: 20px;
    }

    .features-masonry-col:last-child {
      margin-top: 40px;
    }
  }

  @media ${maxDevice.tablet} {
    .features-masonry-col:first-child {
      margin-top: unset;
    }
  }
`;

const FeaturesSection: React.FC = () => {
  const {t} = useTranslation('translation', {keyPrefix: 'SvitHome.Overview.FeaturesSection'});

  const renderedFeatures = features.map((feature, index) => {
    const {element: Element, parentType} = feature;

    const key = `feature_${index}`;

    return Element ? <Element parentType={parentType as 'light' | 'dark'} key={key} /> : <div key={key} />;
  });

  return (
    <section className="vertical-spacing">
      <FeaturesSectionWrapper className="section">
        <DoubleColRow
          leftContent={<Text className="biggest regular">{t('LeftTitle')}</Text>}
          rightContent={
            <Text color={Colors.grey1} className="big regular">
              {t('RightDescription')}
            </Text>
          }
        />
        <MasonryGrid
          className="features-masonry"
          columnClassName="features-masonry-col"
          breakpointCols={breakpointColumnsObj}
        >
          {renderedFeatures}
        </MasonryGrid>
      </FeaturesSectionWrapper>
    </section>
  );
};

export default FeaturesSection;
