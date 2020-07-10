import React, { useRef } from 'react';
import UploadBox from '@src/pages/UploadBox';

import VideoProvider from '@src/common/context/VideoProvider';
import MulanDrawer from '@src/common/containers/MulanDrawer';

const Player: React.FC = () => {
  const rootRef = useRef(null);
  return (
    <VideoProvider>
      <div ref={rootRef}>
        <UploadBox />

        <video
          controls
          autoPlay
          style={{ width: `calc(100% - 500px)`, height: `calc(100% - 500px)` }}
          className="ml-ml-16 ml-mt-8">
          <source
            src="http://127.0.0.1:5000/video/video_feed"
            type="video/mp4"
          />
        </video>
        <MulanDrawer isExtension={false} keep={true} rootRef={rootRef} />
      </div>
    </VideoProvider>
  );
};

export default Player;
