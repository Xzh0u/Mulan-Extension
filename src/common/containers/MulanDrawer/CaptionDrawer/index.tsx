import React from 'react';
import Header from '@src/common/containers/MulanDrawer/CaptionDrawer/Header';
import Caption from '@src/common/containers/MulanDrawer/CaptionDrawer/Caption';

const CaptionDrawer: React.FC = () => {
  return (
    <div className="ml-flex ml-flex-col ml-h-full">
      <Header />
      <Caption />
    </div>
  );
};

export default CaptionDrawer;
