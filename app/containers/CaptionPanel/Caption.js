import React from 'react';
import styled from 'styled-components';

const focusCaption = (curTime, caption, idx) => {
  if (curTime > caption.startTime[idx] && curTime < caption.endTime[idx]) {
    return true;
  }
  return false;
};

const StyledSpan = styled.span`
  ${({ focused }) => focused && 'background-color: #d9f7be;'};
`;

const Caption = ({ curTime, caption, wordOnClick }) => (
  <div className="ml-flex ml-flex-col ml-leading-relaxed ml-font-mono ml-text-base ml-text-gray-600 ml-mx-4 ml-my-5 ml-text-left ">
    <p className="ml-overflow-y-auto ml-mb-64">
      {curTime}
      {(() => {
        if (caption && caption.context) {
          return caption.context.map((text, idx) => (
            <StyledSpan
              focused={focusCaption(curTime, caption, idx)}
              tabIndex="0"
              key={idx}
              className="ml-mr-2 hover-ml-font-extrabold hover-ml-underline"
              onClick={() => {
                wordOnClick(caption.startTime[idx]);
              }}>
              {text}
            </StyledSpan>
          ));
        }
      })()}
    </p>
  </div>
);

export default Caption;
