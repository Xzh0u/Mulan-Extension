import React, { useContext, memo } from 'react';
import styled from 'styled-components';
import { CardMedia, Tooltip, Card } from '@material-ui/core';
import { videoContext } from '@src/common/context/VideoProvider';

const StyledCard = styled(Card)`
  &:last-of-type {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export interface SnapshotInfoProps {
  url: string;
  time: number;
}

const SnapshotInfo: React.FC<SnapshotInfoProps> = ({ time, url }) => {
  const { dispatch } = useContext(videoContext);

  return (
    <Tooltip
      title={`Jump to ${Math.floor(time / 60)
        .toString()
        .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
      placement="top">
      <StyledCard
        tabIndex={0}
        raised
        className="ml-flex-shrink-0 ml-bottom-0 ml-w-64 ml-h-36 ml-mx-4 ml-my-8 focus:ml-outline-none focus:ml-shadow-outline">
        <CardMedia
          component="img"
          alt="ppt"
          image={url}
          onClick={() => {
            dispatch({ type: 'setTime', payload: { time } });
            document.querySelector('video')!.currentTime = time;
            document.querySelector('video')!.play();
          }}
        />
      </StyledCard>
    </Tooltip>
  );
};

export default memo(SnapshotInfo);
