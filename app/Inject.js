import React, { Component, useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import CaptionPanel from './containers/CaptionPanel';
import './base.less';
import { Drawer } from '@material-ui/core';
import styled from 'styled-components';
import ImagePanel from './containers/ImagePannel';
import { getImg } from './utils/getVideo';
import { getCaption } from './utils/getCaption';

import OpenButton from './components/OpenButton';

const StyledDrawer = styled(Drawer)`
  ${({ containerstyle }) => `
  .MuiDrawer-paper {
    ${containerstyle}
  }
  `}
`;

const InjectApp = props => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);
  const videoRef = useRef(null);
  const [srcs, setSrcs] = useState([]);
  const [curTime, setCurTime] = useState(0);
  const [caption, setCaption] = useState({});
  const cardOnClick = time => {
    setCurTime(time);
    document.querySelector('video').currentTime = time;
    document.querySelector('video').play();
  };
  const wordOnClick = time => {
    setCurTime(time);
    document.querySelector('video').currentTime = time;
    document.querySelector('video').play();
  };

  const buttonOnClick = async () => {
    await setVisible(prev => !prev);
    const captionData = await getCaption();
    setCaption(captionData);
    //get img url from back-end
    if (srcs.length === 0) {
      //only load once
      const imgSrcs = await getImg();
      setSrcs(imgSrcs);
    }
  };

  useEffect(() => {
    if (domRef) {
      setVisible(false);
    }
  }, [domRef]);

  useEffect(() => {
    if (document.querySelector('video').currentTime) {
      setCurTime(document.querySelector('video').currentTime);
      // console.log(document.querySelector('video').currentTime);
    }
  });

  return (
    <div
      id="mulan"
      ref={domRef}
      className="ml-absolute ml-top-0 ml-h-full ml-w-full ml-invisible">
      <OpenButton buttonOnClick={buttonOnClick} />
      {domRef.current && (
        <StyledDrawer
          containerstyle={'width: 360px;'}
          className="ml-visible ml-z-9999"
          anchor="right"
          variant="persistent"
          ModalProps={{
            container: domRef.current,
          }}
          open={isVisible}
          onClose={() => setVisible(false)}>
          <CaptionPanel
            curTime={curTime}
            caption={caption}
            wordOnClick={wordOnClick}
          />
        </StyledDrawer>
      )}
      {domRef.current && (
        <StyledDrawer
          containerstyle={`
            width: calc(100%  - 360px);
            height: calc(30%);
            top: auto;
            bottom: 0px;
            visibility: invisible;
            position: fixed;
          `}
          className="ml-h-full"
          anchor="left"
          variant="persistent"
          ModalProps={{
            container: domRef.current,
          }}
          open={isVisible}
          onClose={() => setVisible(false)}>
          <ImagePanel srcs={srcs} onClick={i => cardOnClick(i)} />
        </StyledDrawer>
      )}
    </div>
  );
};

const injectDOM = document.createElement('div');
injectDOM.className = 'mulan-root';
injectDOM.id = 'mulan';
injectDOM.style.textAlign = 'center';
document.body.appendChild(injectDOM);
render(<InjectApp />, injectDOM);
