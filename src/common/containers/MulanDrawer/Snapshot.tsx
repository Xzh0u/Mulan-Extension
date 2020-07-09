import React, { useContext } from 'react';
import { CardMedia, Tooltip, Card } from '@material-ui/core';
import styled from 'styled-components';
import { videoContext } from '@src/common/context/VideoProvider';

const StyledCard = styled(Card)`
  &:last-of-type {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

interface Props {
  url: string;
  time: number;
}

const ImageCard: React.FC<Props> = ({ url, time }) => {
  const { dispatch } = useContext(videoContext);

  return (
    <Tooltip
      title={`Jump to ${Math.floor(time / 60)
        .toString()
        .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
      placement="top">
      <StyledCard
        raised
        className="ml-flex-shrink-0 ml-bottom-0 ml-w-64 ml-h-44 ml-mx-4 ml-my-8">
        <CardMedia
          component="img"
          alt="ppt"
          image={url}
          onClick={() => dispatch({ type: 'setTime', payload: { time } })}
        />
      </StyledCard>
    </Tooltip>
  );
};

export default ImageCard;
