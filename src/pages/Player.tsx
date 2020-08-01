import React, { useRef, useContext, useState, useEffect } from 'react';
import UploadBox from '@src/pages/UploadBox';
import { videoContext } from '@src/common/context/VideoProvider';
import VideoProvider from '@src/common/context/VideoProvider';
import MulanDrawer from '@src/common/containers/MulanDrawer';

const Player: React.FC = () => {
  const rootRef = useRef(null);
  const { file } = useContext(videoContext);
  const [blob, setBlob] = useState('');
  console.log('file');
  console.log(file);
  useEffect(() => {
    debugger;
    // create blob
    if (blob || !file) {
      return;
    }
    const fileBlob = window.URL.createObjectURL(file);
    debugger;
    // set blob
    setBlob(fileBlob);
  }, [file, blob]);
  return (
    <VideoProvider>
      <div ref={rootRef}>
        <UploadBox />
        <video
          controls
          autoPlay
          style={{ width: `calc(100% - 500px)`, height: `calc(100% - 500px)` }}
          className="ml-ml-16 ml-mt-8">
          <source src={blob} type="video/mp4" />
        </video>
        <MulanDrawer isExtension={false} keep={true} rootRef={rootRef} />
      </div>
    </VideoProvider>
  );
};

export default Player;
