import React from 'react';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  &:last-of-type {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const cardOnClick = (time) => {
  // alert(time);
  document.querySelector('video').currentTime = time;
  document.querySelector('video').play();
};

const ImageCard = props => (
  <StyledCard
    raised
    className="ml-flex-shrink-0 ml-bottom-0 ml-min-w-0 ml-w-240 ml-mx-4 ml-my-12">
    <CardMedia
      component="img"
      alt="ppt"
      image={props.src[0]}
      onClick={() => cardOnClick(props.src[1])}
    />
  </StyledCard>
);

export default ImageCard;
