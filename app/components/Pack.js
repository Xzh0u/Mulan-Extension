import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
  .MuiIconButton-label {
    width: 1;
    padding: 0;
  }
`;

const Pack = () => (
  <StyledIconButton className="ml-flex ml-absolute ml-left-0 ml-top-1-2 ml--translate-y-full ml-origin-bottom-left ml-transform ml-rotate-90 ml-p-0">
    <FontAwesomeIcon
      icon={faSortUp}
      color="gray"
      size="sm"
      variant="contained"
      className="ml-p-0"
    />
  </StyledIconButton>
);

export default Pack;
