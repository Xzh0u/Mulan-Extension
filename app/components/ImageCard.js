import React from 'react';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  &:last-of-type {
    margin-right: 20px;
  }
`;

const ImageCard = (props) => (
  <StyledCard
    raised
    className="ml-flex-shrink-0 ml-min-w-0 ml-w-240 ml-h-44 ml-mx-4 ml-my-8">
    <CardMedia
      component="img"
      alt="ppt"
      image={props.src}
    />
  </StyledCard>
);

export default ImageCard;
