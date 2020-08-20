import React, { useContext } from 'react';
import styled from 'styled-components';
import { videoContext } from '@src/common/context/VideoProvider';
import { CaptionType } from '@src/common/context/VideoProvider';

const focusCaption = (curTime: number, caption: CaptionType, idx: number) => {
  if (curTime > caption.startTime[idx] && curTime < caption.endTime[idx]) {
    var id = idx.toString();
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
    return true;
  }
  return false;
};

const StyledSpan = styled.span`
  ${({ focused }: { focused: boolean }) =>
    focused && 'background-color: #d9f7be;'};
`;

const Caption: React.FC = () => {
  const { video, dispatch } = useContext(videoContext);
  const { curTime, captions } = video;
  debugger;
  return (
    <div className="ml-flex ml-flex-col ml-leading-relaxed ml-font-mono ml-text-xs ml-text-gray-600 ml-mx-4 ml-my-5 ml-text-left">
      <p className="ml-overflow-y-auto ml-mb-64 ml-my-12">
        {(() => {
          if (captions && captions.context) {
            return captions.context.map((text, idx) => (
              <StyledSpan
                id={idx.toString()}
                focused={focusCaption(curTime, captions, idx)}
                tabIndex={0}
                key={idx}
                className="ml-mr-2 hover-ml-font-extrabold hover-ml-underline"
                onClick={() => {
                  dispatch({
                    type: 'setTime',
                    payload: { time: captions.startTime[idx] },
                  });
                  document.querySelector('video')!.currentTime =
                    captions.startTime[idx];
                  document.querySelector('video')!.play();
                }}>
                {text}
              </StyledSpan>
            ));
          } else {
            return;
          }
        })()}
      </p>
    </div>
  );
};

export default Caption;
