import Masonry from 'react-masonry-css';

import {Image} from 'antd';

import styled from 'styled-components';

export const GalleryAllPhotosWrapper = styled.div`
  min-height: 800px;
  padding: 100px 0;
`;

export const ShowMoreButtonWrapper = styled.div`
  margin-top: 20px;

  text-align: center;

  span {
    cursor: pointer;
  }
`;

export const GalleryImage = styled(Image)`
  width: 100%;

  object-fit: cover;
`;

export const MasonryGrid = styled(Masonry)`
  display: flex;
  gap: 20px;
`;
