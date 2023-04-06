import { Box } from '@mui/material';
import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonFullDish = () => (
  <ContentLoader
    speed={2}
    width={3000}
    height={500}
    viewBox="0 0 3000 500"
    backgroundColor="#C0C0C0"
    foregroundColor="#CCCCCC"
  >
    <rect x="0" y="0" rx="10" ry="10" width="1210" height="399" />
  </ContentLoader>
);

export default SkeletonFullDish;
