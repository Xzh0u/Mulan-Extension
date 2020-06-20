import React, { Component, useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import CaptionPanel from './containers/CaptionPanel';
import './base.less';
import { Drawer } from '@material-ui/core';
import styled from 'styled-components';
import ImagePanel from './containers/ImagePannel';
import Notes from './components/Notes';
import axios from 'axios';

import OpenButton from './components/OpenButton';


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
  // const [srcs, setSrcs] = useState(['https://i.loli.net/2020/06/01/7Zn5NDfe8iLWtaB.png', 'https://i.loli.net/2020/06/01/7Zn5NDfe8iLWtaB.png', 'https://i.loli.net/2020/06/01/7Zn5NDfe8iLWtaB.png', 'https://i.loli.net/2020/06/01/7Zn5NDfe8iLWtaB.png', 'https://i.loli.net/2020/06/01/7Zn5NDfe8iLWtaB.png']);
  const [srcs, setSrcs] = useState([]);
  const [curTime, setCurTime] = useState(0);
  const cardOnClick = (time) => {
    // alert(time);
    setCurTime(time);
    document.querySelector('video').currentTime = time;
    document.querySelector('video').play();
  };

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
      .get('http://127.0.0.1:2333/get_frames')
      .then((response) => {
        const img64 = response.data.imgs; //base64 format
        const times = response.data.times;
        const imgSrcs = [];
        for (let i = 0, len = img64.length; i < len; i++) {
          const res = base64toBlob(img64[i], 'image/jpeg'); //blob format
          const imgSrc = window.URL.createObjectURL(res); //url
          imgSrcs.push([imgSrc, times[i]]);
        }
        setSrcs(imgSrcs);
        // setTimes(times);
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
          <CaptionPanel curTime={curTime} />
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
// window.addEventListener('load', () => {
// alert('load aaa');
const injectDOM = document.createElement('div');
injectDOM.className = 'mulan-root';
injectDOM.id = 'mulan';
injectDOM.style.textAlign = 'center';
document.body.appendChild(injectDOM);
render(<InjectApp />, injectDOM);
// });
