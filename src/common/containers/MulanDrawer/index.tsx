import React, { RefObject, useState, useContext } from 'react';
import Drawer from '@src/common/components/Drawer';
import Snapshot from '@src/common/containers/MulanDrawer/Snapshot';
import { useVideoListener } from '@src/common/hooks/useVideoListener';
import CaptionDrawer from './CaptionDrawer';
import OpenButton from '@src/common/components/OpenButton';
import { videoContext } from '@src/common/context/VideoProvider';

interface Props {
  rootRef: RefObject<HTMLDivElement>;
  keep: boolean;
}

const rightDrawerWidth = 360;

const MulanDrawer: React.FC<Props> = ({ keep, rootRef }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { video } = useContext(videoContext);
  const { imgs } = video;
  useVideoListener();

  return (
    <div className="ml-absolute ml-top-0 ml-h-full ml-w-full ml-invisible">
      {!keep && (
        <OpenButton
          buttonOnClick={() => {
            if (isDrawerOpen) {
              if (!keep) {
                setDrawerOpen(!isDrawerOpen);
              }
              return;
            }
            setDrawerOpen(!isDrawerOpen);
          }}>
          toggle
        </OpenButton>
      )}
      <Drawer
        containerstyle={`width: ${rightDrawerWidth}px;`}
        className="ml-visible ml-z-9999"
        anchor="right"
        ModalProps={{
          container: rootRef.current,
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <CaptionDrawer />
      </Drawer>
      <Drawer
        className="ml-h-full"
        anchor="left"
        containerstyle={`
          width: calc(100%  - ${rightDrawerWidth}px);
          height: calc(30%);
          top: auto;
          bottom: 0px;
          visibility: invisible;
          position: fixed;
        `}
        ModalProps={{
          container: rootRef.current,
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <Snapshot snapshots={imgs} />
      </Drawer>
    </div>
  );
};

export default MulanDrawer;
