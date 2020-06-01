import React, { Component, useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import CaptionPanel from './containers/CaptionPanel';
import './base.less';
import { Drawer } from '@material-ui/core';
import styled from 'styled-components';
import ImagePanel from './containers/ImagePannel';
import OpenButton from './components/OpenButton';

const StyledDrawer = styled(Drawer)`
  ${({ containerstyle }) => `
  .MuiDrawer-paper {
    ${containerstyle}
  }
  `}
`;

const InjectApp = props => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  const buttonOnClick = () => {
    setVisible(prev => !prev);
  };

  useEffect(() => {
    if (domRef) {
      setVisible(false);
    }
  }, [domRef]);

  return (
    <div
      ref={domRef}
      className="ml-absolute ml-top-0 ml-h-full ml-w-full ml-invisible">
      <OpenButton onClick={buttonOnClick} />
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
          <CaptionPanel />
        </StyledDrawer>
      )}
      {domRef.current && (
        <StyledDrawer
          containerstyle={`
            width: calc(100%  - 360px);
            height: 240px;
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
          <ImagePanel />
        </StyledDrawer>
      )}
    </div>
  );
};
// window.addEventListener('load', () => {
// alert('load aaa');
const injectDOM = document.createElement('div');
injectDOM.className = 'mulan-root';
injectDOM.id = 'mulan';
injectDOM.style.textAlign = 'center';
document.body.appendChild(injectDOM);
render(<InjectApp />, injectDOM);
// });
