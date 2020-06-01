import React from 'react';
import ImageCard from '../../components/ImageCard';

const ImagePanel = () => (
  <div className="ml-h-full ml-w-full ">
    <div className="ml-flex ml-flex-shrink-0 ml-visible ml-overflow-x-auto">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  </div>
);

export default ImagePanel;
