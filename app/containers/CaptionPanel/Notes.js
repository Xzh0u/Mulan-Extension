import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';

const Notes = () => (
  <Button
    variant="contained"
    className="ml-justify-center ml-fixed ml-bottom-25 ml-right-25 ml-shadow-lg ml-rounded-full ml-h-16 ml-w-16 ml-z-9999 ml-bg-white">
    <FontAwesomeIcon icon={faPencilAlt} color="#4a5568" size="2x" />
  </Button>
);

export default Notes;
