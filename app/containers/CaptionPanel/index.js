import React from 'react';
import Header from './Header';
import Caption from './Caption';
import Notes from './Notes';
import { checkPropTypes } from 'prop-types';

const CaptionPanel = props => (
  <div className="ml-flex ml-flex-col ml-h-full">
    <Header caption={props.caption} />
    <Caption
      curTime={props.curTime}
      caption={props.caption}
      wordOnClick={props.wordOnClick}
    />
    <Notes />
  </div>
);

export default CaptionPanel;
