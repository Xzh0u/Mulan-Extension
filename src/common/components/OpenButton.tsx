import React, { useRef, useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { downloadVideo } from '@src/common/utils/downloadVideo';
import { getCaption } from '@src/common/utils/getCaption';
import { getImage } from '@src/common/utils/getImage';
import { videoContext } from '@src/common/context/VideoProvider';

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
  const { dispatch } = useContext(videoContext);

  useEffect(() => {
    if (!domRef.current) {
      return;
    }
    setWidth(domRef.current.offsetWidth);
  }, [domRef]);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  const sendRequest = async () => {
    await downloadVideo(window.location.href);
    const captions = await getCaption(window.location.href);
    const imgs = await getImage(window.location.href);

    dispatch({ type: 'setImgs', payload: { imgs } });
    dispatch({ type: 'setCaptions', payload: { captions } });
  };
  return (
    <BouncyDiv activated={checked} className="ml-visible">
      <StyledBtn
        onClick={() => {
          handleChange();
          props.buttonOnClick();
          sendRequest();
        }}
        className="ml-fixed ml-right-0 ml-top-1/2 ml-text-white ml-z-9999 ml-visible ml-origin-bottom-right ml-transform ml-rotate-270"
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
