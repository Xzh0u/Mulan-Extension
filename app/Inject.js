import React, { Component, useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import CaptionPanel from './containers/CaptionPanel';
import './base.less';
import { Drawer } from '@material-ui/core';
import styled from 'styled-components';

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
      <button
        onClick={buttonOnClick}
        className="ml-absolute ml-top-0 ml-text-white ml-bg-teal-500 ml-z-9999 ml-visible">
        Open Todo
      </button>
      {domRef && (
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
      {domRef && (
        <StyledDrawer
          containerstyle={`
            width: calc(100%  - 360px);
            height: 240px;
            top: auto;
            bottom: 0px;
            visibility: visible;
            position: absolute;
          `}
          className="ml-h-full"
          anchor="left"
          variant="persistent"
          ModalProps={{
            container: domRef.current,
          }}
          open={isVisible}
          onClose={() => setVisible(false)}>
          <div>Test</div>
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
