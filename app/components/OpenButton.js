import React, { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BouncyDiv = styled.div`
  ${({ activated }) =>
    activated && '--transform-translate-x: 100% !important;'};
`;

const StyledBtn = styled(Button)`
  ${({ width }) => `--transform-translate-y: -${width}px !important;`};
  position: fixed;
`;

const OpenButton = props => {
  const [width, setWidth] = useState(0);
  const [checked, setChecked] = React.useState(true);

  const domRef = useRef(null);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }
    setWidth(domRef.current.offsetWidth);
  }, [domRef]);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <BouncyDiv activated={checked} className="ml-visible">
      <StyledBtn
        onClick={() => {
          handleChange();
          props.buttonOnClick();
        }}
        className="ml-fixed ml-right-0 ml-top-1-2 ml-text-white ml-z-9999 ml-visible ml-origin-bottom-right ml-transform ml-rotate-270"
        ref={domRef}
        variant="contained"
        size="medium"
        color="primary"
        width={width}>
        Open
      </StyledBtn>
    </BouncyDiv>
  );
};

OpenButton.propTypes = {
  buttonOnClick: PropTypes.func.isRequired,
};

export default OpenButton;
