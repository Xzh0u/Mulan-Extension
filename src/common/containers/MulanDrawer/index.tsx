import React, { RefObject, useState } from 'react';
import Drawer from '@src/common/components/Drawer';
import Snapshot from '@src/common/containers/MulanDrawer/Snapshot';

interface Props {
  rootRef: RefObject<HTMLDivElement>;
  keep: boolean;
}

const rightDrawerWidth = 360;

const MulanDrawer: React.FC<Props> = ({ keep, rootRef }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const url =
    'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png';

  const fakeData = [
    { url, time: 0 },
    { url, time: 0 },
    { url, time: 0 },
    { url, time: 0 },
    { url, time: 0 },
  ];

  return (
    <div className="ml-absolute ml-top-0 ml-h-full ml-w-full ml-invisible">
      <div className="ml-absolute ml-visible ml-left-1/2">
        <button
          onClick={() => {
            if (isDrawerOpen) {
              if (!keep) {
                setDrawerOpen(!isDrawerOpen);
              }
              return;
            }
            setDrawerOpen(!isDrawerOpen);
          }}>
          toggle
        </button>
      </div>
      <Drawer
        containerstyle={`width: ${rightDrawerWidth}px;`}
        className="ml-visible ml-z-9999"
        anchor="right"
        ModalProps={{
          container: rootRef.current,
        }}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <div>test</div>
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
        <div className="ml-h-full ml-w-full ">
          <div className="ml-flex ml-flex-shrink-0 ml-visible ml-overflow-x-auto">
            {fakeData.map(({ url, time }, idx) => {
              return <Snapshot key={idx} url={url} time={time} />;
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MulanDrawer;
