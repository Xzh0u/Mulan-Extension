import React, { useRef } from 'react';
import { render } from 'react-dom';
import VideoProvider from '@src/common/context/VideoProvider';
import MulanDrawer from '@src/common/containers/MulanDrawer';
import '@src/index.scss';

const Inject: React.FC = () => {
  const rootRef = useRef(null);

  return (
    <VideoProvider>
      <div ref={rootRef}>
        <MulanDrawer isExtension={true} keep={false} rootRef={rootRef} />
      </div>
    </VideoProvider>
  );
};

const injectDOM = document.createElement('div');
injectDOM.id = 'mulan_DWAfawfwardzarf';
document.body.appendChild(injectDOM);
render(<Inject />, injectDOM);
