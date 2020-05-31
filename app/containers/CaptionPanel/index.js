import React from 'react';
import Header from './Header';

const CaptionPanel = () => (
  <div className="ml-flex ml-flex-col ml-h-full">
    <Header className="ml-bg-gray-400 ml-h-14 ml-w-full ml-z-9999" />
    <div className="ml-font-mono ml-text-lg ml-text-gray-800">
      Here is subtitle
    </div>
  </div>
);

export default CaptionPanel;
