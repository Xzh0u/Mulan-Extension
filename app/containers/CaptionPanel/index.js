import React from 'react';
import Header from './Header';
import Caption from './Caption';
import Notes from './Notes';
import { checkPropTypes } from 'prop-types';

const CaptionPanel = props => (
  <div className="ml-flex ml-flex-col ml-h-full">
    <Header />
    <Caption curTime={props.curTime} caption={props.caption} />
    <Notes />
  </div>
);

export default CaptionPanel;
