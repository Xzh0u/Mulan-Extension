import React, { useRef } from 'react';

import VideoProvider from '@src/common/context/VideoProvider';
import MulanDrawer from '@src/common/containers/MulanDrawer';

const Player: React.FC = () => {
  const rootRef = useRef(null);

  return (
    <VideoProvider>
      <div ref={rootRef}>
        Player
        <MulanDrawer rootRef={rootRef} />
      </div>
    </VideoProvider>
  );
};

export default Player;
