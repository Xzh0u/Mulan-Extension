import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@material-ui/core';

const Notes = () => (
  <IconButton>
    <FontAwesomeIcon icon={faStickyNote} color="gray" size="sm" />
  </IconButton>
);

export default Notes;
