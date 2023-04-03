import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonDishCard = (props: any) => (
  <ContentLoader
    speed={2}
    width={310}
    height={400}
    viewBox="0 0 325 400"
    backgroundColor="#C0C0C0"
    foregroundColor="#CCCCCC"
    {...props}
  >
    <rect x="4" y="4" rx="10" ry="10" width="320" height="227" />
    <rect x="15" y="248" rx="10" ry="10" width="48" height="27" />
    <rect x="15" y="292" rx="10" ry="10" width="260" height="26" />
    <rect x="15" y="350" rx="10" ry="10" width="67" height="26" />
    <rect x="154" y="347" rx="10" ry="10" width="157" height="40" />
  </ContentLoader>
);

export default SkeletonDishCard;
