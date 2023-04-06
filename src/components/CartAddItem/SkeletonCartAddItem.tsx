import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCartAddItem = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={234}
    viewBox="0 0 234 275"
    backgroundColor="#C0C0C0"
    foregroundColor="#CCCCCC"
  >
    <rect x="0" y="0" rx="10" ry="10" width="220" height="123" />
    <rect x="35" y="133" rx="10" ry="10" width="137" height="17" />
    <rect x="65" y="165" rx="10" ry="10" width="55" height="15" />
    <circle cx="140" cy="170" r="12" />
    <rect x="80" y="195" rx="10" ry="10" width="37" height="15" />
  </ContentLoader>
);

export default SkeletonCartAddItem;
