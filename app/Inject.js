import React, { Component, useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import CaptionPanel from './containers/CaptionPanel';
import './base.less';
import { Drawer } from '@material-ui/core';
import styled from 'styled-components';
import ImagePanel from './containers/ImagePannel';
import Notes from './components/Notes';
import axios from 'axios';

const StyledDrawer = styled(Drawer)`
  ${({ containerstyle }) => `
  .MuiDrawer-paper {
    ${containerstyle}
  }
  `}
`;

const InjectApp = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);
  const [srcs, setSrcs] = useState([]);

  function base64toBlob(base64, type) {
    // 将base64转为Unicode规则编码
    const bstr = atob(base64, type);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n); // 转换编码后才可以使用charCodeAt 找到Unicode编码
    }
    return new Blob([u8arr], {
      type,
    });
  }
  const buttonOnClick = () => {
    setVisible(prev => !prev);
    //get img url from back-end
    if (srcs.length === 0) { //only load once
      axios
      .get('http://127.0.0.1:2333/login')
      .then((response) => {
        const data64 = response.data.data; //base64 format
        const imgSrcs = [];
        for (let i = 0, len = data64.length; i < len; i++) {
          const res = base64toBlob(data64[i], 'image/jpeg'); //blob format
          const imgSrc = window.URL.createObjectURL(res); //url
          imgSrcs.push(imgSrc);
        }
        setSrcs(imgSrcs);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
    }
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
        className="ml-absolute  ml-right-0 ml-text-white ml-bg-teal-500 ml-z-9999 ml-visible">
        Open Todo
      </button>
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
          <ImagePanel srcs={srcs} />
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
