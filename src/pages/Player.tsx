import React, { useRef } from 'react';

import VideoProvider from '@src/common/context/VideoProvider';
import MulanDrawer from '@src/common/containers/MulanDrawer';

const Player: React.FC = () => {
  const rootRef = useRef(null);

  return (
    <VideoProvider>
      <div ref={rootRef}>
        <video
          controls={true}
          style={{ width: `calc(100% - 500px)`, height: `calc(100% - 500px)` }}
          className="ml-ml-16 ml-mt-8">
          <source
            src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
            type="video/mp4"
          />
        </video>
        <MulanDrawer keep={true} rootRef={rootRef} />
      </div>
    </VideoProvider>
  );
};

export default Player;
