import React from 'react';
import ImageCard from '../../components/ImageCard';

const ImagePanel = props => (
  <div className="ml-h-full ml-w-full ">
    <div className="ml-flex ml-flex-shrink-0 ml-visible ml-overflow-x-auto">
      {props.srcs.map((item, index) => (
        <ImageCard key={index} src={item} onClick={() => props.onClick(item[1])} />
      ))}
    </div>
  </div>
);
export default ImagePanel;
