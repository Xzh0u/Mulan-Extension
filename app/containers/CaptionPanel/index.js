import React from 'react';
import Header from './Header';
import Caption from './Caption';
import Notes from './Notes';

const CaptionPanel = () => (
  <div className="ml-flex ml-flex-col ml-h-full">
    <Header />
    <Caption />
    <Notes />
  </div>
);

export default CaptionPanel;
