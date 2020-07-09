import React, { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const BouncyDiv = styled.div`
  ${({ activated }: { activated: boolean }) =>
    activated && '--transform-translate-x: 100% !important;'};
`;

const StyledBtn = styled(Button)`
  ${({ width }: { width: number }) =>
    `--transform-translate-y: -${width}px !important;`};
  position: fixed;
`;

interface Props {
  buttonOnClick: () => void;
}
const OpenButton: React.FC<Props> = props => {
  const [width, setWidth] = useState(0);
  const [checked, setChecked] = React.useState(true);
  const domRef = useRef<HTMLButtonElement>(null);

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

export default OpenButton;
