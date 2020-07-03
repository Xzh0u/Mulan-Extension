import React from 'react';

const Caption = props => (
  <div className="ml-flex ml-flex-col ml-leading-relaxed ml-font-mono ml-text-base ml-text-gray-600 ml-mx-4 ml-my-5 ml-text-left ">
    <p className="ml-overflow-y-auto ml-mb-64">
      {(() => {
        if (props.caption && props.caption.context) {
          return props.caption.context.map((text, idx) => (
            <span
              tabIndex="0"
              key={idx}
              className="ml-mr-2 hover-ml-underline focus-ml-placeholder-yellow-500">
              {text}
            </span>
          ));
        }
      })()}
    </p>
  </div>
);

export default Caption;
