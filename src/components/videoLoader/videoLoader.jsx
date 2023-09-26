import React from 'react';
import ContentLoader from 'react-content-loader';

const VideoLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={225}
    viewBox="0 0 300 225"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="300" height="180" />
  </ContentLoader>
);

export default VideoLoader;
