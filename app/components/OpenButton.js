import React, { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledBtn = styled(Button)`
  ${({ width }) => `--transform-translate-y: -${width}px !important;`};
`;

const OpenButton = ({ ...rest }) => {
  const [width, setWidth] = useState(0);
  const domRef = useRef(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }
    setWidth(domRef.current.offsetWidth);
  }, [domRef]);

  return (
    <StyledBtn
      ref={domRef}
      variant="contained"
      size="medium"
      color="primary"
      width={width}
      className="ml-absolute ml-right-0 ml-top-1-2 ml-text-white ml-z-9999 ml-visible ml-origin-bottom-right ml-transform ml-rotate-270"
      {...rest}>
      Open Mulan
    </StyledBtn>
  );
};

export default OpenButton;
