/* eslint-disable unused-imports/no-unused-imports-ts */
import {ReactElement, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Image} from 'antd';

import {Text} from '@custom-antd';

import {breakpointColumnsObj} from '@utils/constants';

import Photo1 from '@assets/gallery/photo1.png';
import Photo2 from '@assets/gallery/photo2.png';
import Photo3 from '@assets/gallery/photo3.png';
import Photo4 from '@assets/gallery/photo4.png';
import Photo5 from '@assets/gallery/photo5.png';
import Photo6 from '@assets/gallery/photo6.png';
import Photo7 from '@assets/gallery/photo7.png';
import Photo8 from '@assets/gallery/photo8.png';
import Photo9 from '@assets/gallery/photo9.png';
import Photo10 from '@assets/gallery/photo10.jpg';
import Photo11 from '@assets/gallery/photo11.jpg';
import Photo12 from '@assets/gallery/photo12.png';
import Photo13 from '@assets/gallery/photo13.png';
import Photo14 from '@assets/gallery/photo14.png';
import Photo15 from '@assets/gallery/photo15.png';
import Photo16 from '@assets/gallery/photo16.png';
import Photo17 from '@assets/gallery/photo17.png';
import Photo18 from '@assets/gallery/photo18.png';
import Photo19 from '@assets/gallery/photo19.png';
import Photo20 from '@assets/gallery/photo20.png';
import Photo21 from '@assets/gallery/photo21.png';
import Photo22 from '@assets/gallery/photo22.png';
import Photo23 from '@assets/gallery/photo23.png';
import Photo24 from '@assets/gallery/photo24.png';
import Photo25 from '@assets/gallery/photo25.png';
import Photo26 from '@assets/gallery/photo26.png';
import Photo27 from '@assets/gallery/photo27.png';
import Photo28 from '@assets/gallery/photo28.png';

import Colors from '@styles/Colors';

import {GalleryAllPhotosWrapper, GalleryImage, MasonryGrid, ShowMoreButtonWrapper} from './GalleryAllPhotos.styled';

const images = [
  {src: Photo1},
  {src: Photo2},
  {src: Photo6},
  {src: Photo7},
  {src: Photo8},
  {src: Photo9},
  {src: Photo10},
  {src: Photo11},
  {src: Photo12},
  {src: Photo13},
  {src: Photo14},
  {src: Photo15},
  {src: Photo16},
  {src: Photo17},
  {src: Photo19},
  {src: Photo21},
  {src: Photo22},
  {src: Photo23},
  {src: Photo24},
  {src: Photo25},
  {src: Photo26},
  {src: Photo27},
  {src: Photo28},
];

const GalleryAllPhotos: React.FC = () => {
  const [imagesCount, setImagesCount] = useState(10);
  const [renderedImagesArray, setRenderedImagesArray] = useState<ReactElement[]>([]);

  const {t} = useTranslation('translation', {keyPrefix: 'Gallery.AllPhotos'});

  const renderPhotos = () => {
    const targetArray = images.slice(imagesCount - 10, imagesCount);

    setRenderedImagesArray(prev => {
      return [
        ...prev,
        ...targetArray.map(image => {
          const {src} = image;

          const imageHeight = Math.floor(Math.random() * (350 - 200) + 200);

          const id = src.src + imageHeight;

          return (
            <div style={{marginBottom: 20}} key={id}>
              <GalleryImage src={src.src} style={{height: imageHeight}} />
            </div>
          );
        }),
      ];
    });
  };

  useEffect(() => {
    renderPhotos();
  }, [imagesCount]);

  return (
    <GalleryAllPhotosWrapper>
      <div className="section">
        <Image.PreviewGroup>
          <MasonryGrid
            className="features-masonry"
            columnClassName="features-masonry-col"
            breakpointCols={breakpointColumnsObj}
          >
            {renderedImagesArray}
          </MasonryGrid>
        </Image.PreviewGroup>
        {imagesCount <= images.length ? (
          <ShowMoreButtonWrapper
            onClick={() => {
              setImagesCount(prev => prev + 10);
            }}
          >
            <Text color={Colors.main}>{t('ShowMoreButton')}</Text>
          </ShowMoreButtonWrapper>
        ) : null}
      </div>
    </GalleryAllPhotosWrapper>
  );
};

export default GalleryAllPhotos;
