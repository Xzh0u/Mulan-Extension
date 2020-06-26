import React from 'react';
import ImageCard from '../../components/ImageCard';

const ImagePanel = props => {
  const renderSrcs = () => {
    if (props.srcs) {
      return props.srcs.map((item, index) => (
        <ImageCard
          key={index}
          src={item}
          onClick={() => props.onClick(item[1])}
        />
      ));
    }
  };

  return (
    <div className="ml-h-full ml-w-full ">
      <div className="ml-flex ml-flex-shrink-0 ml-visible ml-overflow-x-auto">
        {renderSrcs()}
      </div>
    </div>
  );
};
export default ImagePanel;
