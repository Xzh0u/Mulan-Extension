import React from 'react';
import SnapshotInfo, { SnapshotInfoProps } from './SnapshotInfo';

interface Props {
  snapshots: Array<SnapshotInfoProps>;
}

const Snapshot: React.FC<Props> = ({ snapshots }) => (
  <div className="ml-h-full ml-w-full ">
    <div className="ml-flex ml-flex-shrink-0 ml-visible ml-overflow-x-auto">
      {snapshots.map(({ url, time }, idx) => (
        <SnapshotInfo url={url} time={time} key={idx} />
      ))}
    </div>
  </div>
);

export default Snapshot;
